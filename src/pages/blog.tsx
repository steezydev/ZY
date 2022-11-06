import * as React from 'react';

import Head from '@/components/Head';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function BlogPage() {
  return (
    <Layout>
      <Seo templateTitle='Blog' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-28'>
            <Head slogan='CHËCK EM ÖUT'>Blog</Head>
          </div>
        </section>
      </main>
    </Layout>
  );
}
