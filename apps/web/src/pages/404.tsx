import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='layout flex flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 font-accent text-4xl text-white md:text-6xl'>
            404
            <br />
            Page Not Found
          </h1>
        </section>
      </main>
    </Layout>
  );
}
