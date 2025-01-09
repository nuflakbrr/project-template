import { FC } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
  ];

  const secondaryLink = [
    { title: 'Career', url: '/career' },
    { title: 'Internship', url: '/internship' },
  ];

  const tertiaryLink = [
    { title: 'Contact Us', url: '/contact' },
    { title: 'FAQ', url: '/faq' },
  ];

  const legalLink = [
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const socialLink = [
    { title: 'Facebook', icon: <FacebookIcon />, url: '/' },
    { title: 'Instagram', icon: <InstagramIcon />, url: '/' },
    { title: 'Twitter', icon: <TwitterIcon />, url: '/' },
    { title: 'LinkedIn', icon: <LinkedInIcon />, url: '/' },
  ];

  return (
    <div className="bg-slate-800">
      <footer className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center text-gray-100 font-primary text-xl md:text-2xl font-bold gap-2"
                  aria-label="logo"
                >
                  {/* <img
                    src="/apple-touch-icon.png"
                    alt="Brand Logo"
                    className="w-8 h-8 object-cover object-center"
                  /> */}
                  Footer
                </a>
              </Link>
            </div>

            <p className="text-gray-400 text-justify sm:pr-8 mb-6">
              about your company, and include information about your products.
            </p>

            <div className="flex gap-4">
              {socialLink?.map((f, i) => (
                <a
                  href={f.url}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                  rel="noreferrer"
                  key={i}
                >
                  {f.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              {primaryLink?.map((b, i) => (
                <div key={i}>
                  <Link href={b.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-teal-500 active:text-teal-600 transition duration-100">
                      {b.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Others
            </div>

            <nav className="flex flex-col gap-4">
              {secondaryLink?.map((c, i) => (
                <div key={i}>
                  <Link href={c.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-teal-500 active:text-teal-600 transition duration-100">
                      {c.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Helps
            </div>

            <nav className="flex flex-col gap-4">
              {tertiaryLink?.map((d, i) => (
                <div key={i}>
                  <Link href={d.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-teal-500 active:text-teal-600 transition duration-100">
                      {d.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              {legalLink?.map((e, i) => (
                <div key={i}>
                  <Link href={e.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-teal-500 active:text-teal-600 transition duration-100">
                      {e.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © {year} - Naufal Akbar Nugroho. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
