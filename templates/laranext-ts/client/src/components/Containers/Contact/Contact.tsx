import { FC } from 'react';

import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

const ContainerContact: FC = () => {
  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex items-center justify-center flex-col">
                  <img
                    src="https://avatars.githubusercontent.com/u/83068205?v=4"
                    loading="lazy"
                    alt="hero"
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                  />

                  <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      Naufal Akbar Nugroho
                    </h1>

                    <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
                      Frontend Developer | Undergraduate Information Systems
                      Student
                    </h1>

                    <p className="mb-8 leading-relaxed">
                      Saya bersemangat memberikan kontribusi untuk memberikan
                      pengetahuan teknologi bagi semua orang!
                    </p>

                    <div className="flex justify-center">
                      <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
                      >
                        GitHub Saya
                      </a>

                      <a
                        href={`mailto:${siteMetadata.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                      >
                        Hubungi Saya
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContainerContact;
