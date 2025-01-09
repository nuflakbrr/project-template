'use client';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/hooks/useAuth';
import { classNames } from '@/lib/classNames';
import InputError from '@/components/Common/InputError';
import AuthSessionStatus from './components/AuthSessionStatus';

const ContainerLogin: FC = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  });

  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false,
    errors: [] as any,
  });
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({
        ...data,
        setErrors: (errors) => setData({ ...data, errors }),
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const resetToken = searchParams.get('reset');
    setStatus(resetToken ? atob(resetToken) : '');
  }, [searchParams]);

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
              <img
                src="/assets/svg/undraw_login.svg"
                loading="lazy"
                alt="Hero Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full px-4 mx-5 lg:w-1/2">
              <div className="flex items-center justify-center mb-5">
                <h1 className="font-teal-500 font-semibold text-2xl lg:text-3xl text-center">
                  Selamat Datang!
                </h1>
              </div>

              <div className="flex items-center justify-center">
                <AuthSessionStatus className="mb-4" status={status} />
              </div>

              <form
                className="bg-white rounded-lg shadow-lg p-8"
                onSubmit={onSubmit}
              >
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
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-slate-600 mb-2"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="block text-teal-500 mb-2 underline"
                    >
                      Lupa Password?
                    </Link>
                  </div>
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

                <div className="mb-3 flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="rounded-lg px-4 py-2"
                    onChange={(e) =>
                      setData({ ...data, remember: e.target.checked })
                    }
                  />
                  <label htmlFor="remember" className="block text-slate-600">
                    Ingat Saya
                  </label>
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
                    {isLoading ? 'Memuat...' : 'Masuk'}
                  </button>
                </div>

                {/* <div className="relative flex items-center justify-center mb-3">
                  <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span className="relative bg-white px-4 text-sm text-gray-400">
                    Atau masuk dengan
                  </span>
                </div>

                <div>
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                    <GitHubIcon />
                    Lanjutkan Dengan GitHub
                  </button>
                </div> */}
              </form>

              <div className="flex items-center justify-center mt-5">
                <p className="text-slate-600">
                  Belum mempunyai akun?{' '}
                  <Link href="/register" legacyBehavior>
                    <a className="text-teal-500 font-bold">Daftar</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerLogin;
