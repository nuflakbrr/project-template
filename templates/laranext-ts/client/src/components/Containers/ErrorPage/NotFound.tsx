import { FC } from 'react';
import Link from 'next/link';

const ContainerNotFound: FC = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap-reverse items-center justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold uppercase md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-3xl sm:text-left">
                Page Not Found
              </h1>

              <p className="mb-8 text-center text-gray-500 dark:text-white md:text-lg sm:text-left">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>

              <Link
                href="/"
                className="inline-block px-5 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-sky-500 rounded-lg outline-none hover:bg-sky-600 focus-visible:ring ring-sky-500 active:bg-sky-500 md:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10 lg:mb-0">
              <img
                src="/assets/svg/undraw_not_found.svg"
                loading="lazy"
                alt="Error Page"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerNotFound;
