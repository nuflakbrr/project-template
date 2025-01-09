'use client';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';
import MainLayout from '@/layouts/MainLayout';
import { formatLocalTime } from '@/lib/formatLocalTime';

const ContainerDashboard: FC = () => {
  const { user, logout } = useAuth({ middleware: 'guest' });

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
        {user && (
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full max-w-xl px-4 mx-5">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="mb-3">
                    <h1 className="text-2xl font-semibold text-center">
                      Welcome back, {user.name}
                    </h1>

                    <p className="text-gray-600 text-center">
                      You are logged in as {user.email}
                    </p>

                    <p className="text-gray-600 text-center">
                      Your email is verified at{' '}
                      {formatLocalTime(user.email_verified_at)}
                    </p>

                    <p className="text-gray-600 text-center">
                      Your account was created at{' '}
                      {formatLocalTime(user.created_at)}
                    </p>

                    <p className="text-gray-600 text-center">
                      Your account was last updated at{' '}
                      {formatLocalTime(user.updated_at)}
                    </p>

                    <p className="text-gray-600 text-center">
                      Your account id is {user.id}
                    </p>
                  </div>
                  <button
                    onClick={logout}
                    className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default ContainerDashboard;
