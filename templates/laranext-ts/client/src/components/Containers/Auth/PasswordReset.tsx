'use client';
import { FC, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { classNames } from '@/lib/classNames';
import MainLayout from '@/layouts/MainLayout';
import InputError from '@/components/Common/InputError';
import AuthSessionStatus from './components/AuthSessionStatus';

const ContainerPasswordReset: FC = () => {
  const searchParams = useSearchParams();
  const { resetPassword } = useAuth({ middleware: 'guest' });

  const getEmail = searchParams.get('email');

  const [data, setData] = useState({
    email: getEmail || '',
    password: '',
    password_confirmation: '',
    errors: [] as any,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword({
        ...data,
        setErrors: (errors) => setData({ ...data, errors }),
        setStatus,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full max-w-lg px-4 mx-5">
              <form
                className="bg-white rounded-lg shadow-lg p-8"
                onSubmit={onSubmit}
              >
                <AuthSessionStatus className="mb-3" status={status} />

                <div className="mb-3">
                  <label htmlFor="email" className="block text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    disabled={isLoading}
                    required
                  />
                  <InputError messages={data.errors?.email} className="mt-2" />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block text-slate-600 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    disabled={isLoading}
                    required
                  />
                  <InputError
                    messages={data.errors?.password}
                    className="mt-2"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password_confirmation"
                    className="block text-slate-600 mb-2"
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan konfirmasi password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                      setData({
                        ...data,
                        password_confirmation: e.target.value,
                      })
                    }
                    disabled={isLoading}
                    required
                  />
                  <InputError
                    messages={data.errors?.password_confirmation}
                    className="mt-2"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className={classNames(
                      isLoading ? 'cursor-not-allowed' : '',
                      'w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3',
                    )}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Memuat...' : 'Reset Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerPasswordReset;
