import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import client from '@/lib/client';

import Bagelink from '@/components/bagelink/Badgelink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/seo/Seo';
import H2 from '@/components/typography/H2';

import { LinkData } from '@/types/data/LinkData';
import { ContactsPageProps } from '@/types/props/ContactsPageProps';

export default function ContactsPage({ about }: ContactsPageProps) {
  return (
    <Layout>
      <Seo templateTitle='Contacts' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className=''>
          <div className='layout'>
            <H2 className='mb-10'>Contact me</H2>
            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-accent text-sm font-light text-white/50'>
                Email
              </span>
              <span className='font-display text-xl'>
                <Link href={`mailto:${about.email}`}>{about.email}</Link>
              </span>
            </div>
            <div className='mt-5 flex flex-col gap-2'>
              <span className='font-accent text-sm font-light text-white/50'>
                Socials
              </span>
              <div className='flex flex-wrap gap-2'>
                {about.links.map(({ label, url }: LinkData, key: number) => (
                  <Bagelink href={url} key={`link-${key}`}>
                    {label}
                  </Bagelink>
                ))}
              </div>
            </div>
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
