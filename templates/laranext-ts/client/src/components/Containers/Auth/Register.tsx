'use client';
import { FC, useState } from 'react';
import Link from 'next/link';

import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/hooks/useAuth';
import { classNames } from '@/lib/classNames';
import InputError from '@/components/Common/InputError';

const ContainerRegister: FC = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  });

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: [] as any,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await register({
        ...data,
        setErrors: (errors) => setData({ ...data, errors }),
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
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
              <img
                src="/assets/svg/undraw_register.svg"
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

              <form
                className="bg-white rounded-lg shadow-lg p-8"
                onSubmit={onSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="block text-slate-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500/70"
                    placeholder="Masukkan nama"
                    autoFocus={true}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    disabled={isLoading}
                    required
                  />
                  <InputError messages={data.errors?.name} className="mt-2" />
                </div>

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
                    {isLoading ? 'Memuat...' : 'Daftar'}
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-5">
                <p className="text-slate-600">
                  Sudah mempunyai akun?{' '}
                  <Link href="/login" legacyBehavior>
                    <a className="text-teal-500 font-bold">Masuk</a>
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

export default ContainerRegister;
