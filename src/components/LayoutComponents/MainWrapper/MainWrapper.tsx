import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { MainWrapperProps } from './MainWrapper.props';

export const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
};
