'use client';
import { FC } from 'react';

import MainLayout from '@/layouts/MainLayout';
import useScreenSize from '@/hooks/useScreenSize';
import useClipboard from '@/hooks/useClipboard';
import { useAuth } from '@/hooks/useAuth';

const ContainerHome: FC = () => {
  const screenSize = useScreenSize();
  const { copy } = useClipboard();
  const { user, logout } = useAuth({
    middleware: 'guest',
  });

  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center gap-3">
          <h1>{screenSize}</h1>
          <button
            onClick={() => copy('Hello, World!')}
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
          >
            Copy
          </button>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <details open>
              <summary>User</summary>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </details>
            <button
              onClick={logout}
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
            >
              Logout
            </button>
          </div>
        ) : null}
      </section>
    </MainLayout>
  );
};

export default ContainerHome;
