import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';

import { AuthProps } from '@/interfaces/auth';
import axios from '@/lib/axios';

interface UseAuthProps {
  middleware?: 'guest' | 'auth';
  redirectIfAuthenticated?: string;
}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: UseAuthProps) => {
  const router = useRouter();
  const params = useParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push('/verify-email');
      }),
  );

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const register = async ({ setErrors, ...props }: AuthProps) => {
    await csrf();
    setErrors([]);
    axios
      .post('/register', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const login = async ({ setErrors, setStatus, ...props }: AuthProps) => {
    await csrf();
    setErrors([]);
    setStatus?.(null);
    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }: AuthProps) => {
    await csrf();
    setErrors([]);
    setStatus?.(null);
    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus?.(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: AuthProps) => {
    await csrf();
    setErrors([]);
    setStatus?.(null);
    axios
      .post('/reset-password', { token: params.token as string, ...props })
      .then((response) =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({
    setStatus,
  }: {
    setStatus: (status: any) => void;
  }) => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate());
    }
    window.location.pathname = '/login';
  };

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }
    if (
      window.location.pathname === '/verify-email' &&
      user?.email_verified_at
    ) {
      router.push(redirectIfAuthenticated || '/');
    }
    if (middleware === 'auth' && error) {
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, error, middleware, redirectIfAuthenticated]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
