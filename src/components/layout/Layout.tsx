import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Loading from '@/components/layout/Loading';

export default function Layout({
  children,
  hideHeader = false,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}) {
  // Put Header or Footer Here
  return (
    <>
      {!hideHeader ? <Header /> : null}
      <Loading className='absolute bottom-10 right-10' />
      {children}
      {!hideFooter ? <Footer /> : null}
    </>
  );
}
