'use client';
import { FC, useState } from 'react';

import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/hooks/useAuth';

const ContainerVerifyEmail: FC = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard',
  });

  const [status, setStatus] = useState(null);

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="max-w-lg px-4 mx-5">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-3">
                  <p className="mb-4 text-sm text-gray-600">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn&apos;t receive the email, we
                    will gladly send you another.
                  </p>
                </div>

                <div className="mb-3">
                  {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                      A new verification link has been sent to the email address
                      you provided during registration.
                    </div>
                  )}
                </div>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => resendEmailVerification({ setStatus })}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                  >
                    Kirim Ulang Email
                  </button>

                  <button
                    type="button"
                    onClick={logout}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerVerifyEmail;
