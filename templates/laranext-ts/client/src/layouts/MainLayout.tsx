import { FC } from 'react';

import Navbar from '@/components/Mixins/Navbar/Navbar';
import Footer from '@/components/Mixins/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-24 mt-40 mb-40">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
