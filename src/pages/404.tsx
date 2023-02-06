import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import Sadface from '~/svg/Sadface.svg';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <Sadface className='text-7xl' />
            <h1 className='mt-8 font-accent text-4xl text-white md:text-6xl'>
              Page Not Found
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
