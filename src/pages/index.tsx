import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { BsTwitter } from 'react-icons/bs';

import Button from '@/components/Button';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <h2>Hi, I'm steezy!</h2>
          <p>
            I build web and mobile apps for everyone. I dove into the coding
            world back in 2018, and ever since, I've been on a mission to figure
            out the secret sauce of the perfect client-side code, and then share
            that with everyone.
          </p>
          <p>
            I've been part of over 20 projects through the years, and in 2023, I
            made a big switch to open-source development. It's the best way to
            learn, meet new people, and have a lot of fun! Come along as I
            build, learn, and make the code shine!
          </p>
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
                Building in public
              </Button>
            </Link>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}
