import { FC } from 'react';

import ContainerNotFound from '@/components/Containers/ErrorPage/NotFound';

export const metadata = {
  title: 'Not Found',
  description: 'Not Found',
};

const NotFound: FC = () => {
  return <ContainerNotFound />;
};

export default NotFound;
