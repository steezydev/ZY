import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) {
  // Put Header or Footer Here
  return (
    <>
      {showHeader ? <Header /> : null}
      {children}
    </>
  );
}
