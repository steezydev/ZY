import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
      {children}
      {!hideFooter ? <Footer /> : null}
    </>
  );
}
