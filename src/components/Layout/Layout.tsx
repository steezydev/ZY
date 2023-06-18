import * as React from 'react';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Loading from '@/components/Layout/Loading';

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
      <div className='flex min-h-screen flex-1 flex-col backdrop-blur-sm md:backdrop-blur-0'>
        {!hideHeader ? <Header /> : null}
        {children}
        <div className='h-12'></div>
        {!hideFooter ? <Footer /> : null}
      </div>

      <Loading className='fixed bottom-10 right-10 z-50' />
    </>
  );
}
