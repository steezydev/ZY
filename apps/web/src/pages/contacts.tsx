import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import Bagelink from '@/components/Bagelink';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { AboutData } from '@/types/about.types';
import { LinkData } from '@/types/link.types';
import client from '@/lib/client';

interface ContactsPageProps {
  about: AboutData;
}

export default function ContactsPage({ about }: ContactsPageProps) {
  return (
    <Layout>
      <Seo templateTitle='Contacts' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className=''>
          <div className='layout'>
            <h2>Contact me</h2>
            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-accent text-sm font-light text-white/50'>
                Email
              </span>
              <span className='font-display text-xl'>
                <Link href={`mailto:${about.email}`}>
                  {about.email}
                </Link>
              </span>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-accent text-sm font-light text-white/50'>
                Socials
              </span>
              <div className='flex flex-wrap gap-2'>
                {about.links.map(({label, url}: LinkData, key: number) => (
                  <Bagelink href={url} key={`link-${key}`}>
                    {label}
                  </Bagelink>
                ))}
              </div>
            </div>
            {/* <div className='mt-12 flex flex-col gap-5 md:w-1/2'>
              <div className='flex flex-col gap-5 md:flex-row'>
                <CustomInput
                  type='text'
                  placeholder='Name'
                  className='md:w-1/2'
                />
                <CustomInput
                  type='text'
                  placeholder='Email'
                  className='md:w-1/2'
                />
              </div>
              <CustomTextarea placeholder='Message' className='h-48 w-full' />
              <Button>Send a message</Button>
            </div> */}
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await client.fetch(
    `*[_type == "about"]{
      links,
      email
    }`
    );

  return {
    props: {
      about: about[0],
    },
  };
}
