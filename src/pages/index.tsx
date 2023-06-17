import { motion } from 'framer-motion';
import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { fetchAbout } from '@/services/about.services';

import { AboutData } from '@/types/about.types';

interface HomePageProps {
  about: AboutData;
}

export default function HomePage({ about }: HomePageProps) {
  return (
    <Layout>
      <Seo />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout mb-10'>
          <h2>Hi, I'm steezy!</h2>
          <p>{about.attributes.about}</p>
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await fetchAbout();

  if (about.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      about: about.data,
    },
  };
}
