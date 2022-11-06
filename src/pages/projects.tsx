import * as React from 'react';

import Head from '@/components/Head';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <main>
        <section className=''>
          <div className='layout min-h-screen pt-28'>
            <Head slogan='BÜILT DIFFËRËNT'>Projects</Head>
          </div>
        </section>
      </main>
    </Layout>
  );
}
