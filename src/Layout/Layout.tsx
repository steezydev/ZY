import * as React from 'react';

import Footer from '@/Layout/Footer';
import Header from '@/Layout/Header';
import Loading from '@/Layout/Loading';

export default function Layout({
  children,
  hideHeader = false,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <>
      {!hideHeader ? <Header /> : null}
      <Loading className='fixed bottom-10 right-10 z-50' />
      {children}
      {!hideFooter ? <Footer /> : null}
    </>
  );
}
