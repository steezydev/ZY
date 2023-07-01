import BlockContent from '@sanity/block-content-to-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { BsTwitter } from 'react-icons/bs';

import client from '@/lib/client';

import Button from '@/components/Button';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { AboutData } from '@/types/data.types';

interface HomePageProps {
  about: AboutData;
}

export default function HomePage({ about }: HomePageProps) {
  return (
    <Layout>
      <Seo />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <h2>Hi, I'm steezy!</h2>
          <BlockContent blocks={about.aboutText} />
          <div className='mt-12 flex flex-col gap-5 md:flex-row'>
            <Link href='/projects'>
              <Button className='h-10 w-full md:h-full'>
                Check out my projects
              </Button>
            </Link>
            <Link target='_blank' href='https://twitter.com/steezy_dev'>
              <Button
                className='h-10 w-full md:h-full'
                icon={<BsTwitter />}
                variant='secondary'
              >
                Enjoying twitter?
              </Button>
            </Link>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await client.fetch(`*[_type == "about"]{aboutText}`);

  return {
    props: {
      about: about[0],
    },
  };
}
