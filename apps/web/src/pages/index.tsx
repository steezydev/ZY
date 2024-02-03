import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

import Button from '@/components/Button';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';
import Stack from '@/components/Stack';

import { AboutData, TechStackData } from '@/types/data.types';

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
          <p>
            I specialize in creating immersive and accessible web user
            experiences producing both design and code for my solutions. My
            coding adventure began in <strong>2018</strong>, and since then, I
            have contributed to more than <strong>20</strong> commercially
            successful projects and gained a strong understanding of what makes
            good UI/UX as well as the full software development lifecycle.
          </p>
          <p>
            Outside of my primary work, I moonlight as a graphics designer,
            indie-hacker & blockchain enthusiast.
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-5 md:flex-row'>
            <Link href='/projects'>
              <Button className='h-10 w-full md:h-full'>
                Check out my projects
              </Button>
            </Link>
          </div>
          <p>
            My main tech stack consists of Typescript, Next.js, TailwindCSS and
            React Native. A full list of my skills is available on{' '}
            <Link
              className='super-link '
              href='https://github.com/steezydev'
              target='_blank'
            >
              GitHub
            </Link>{' '}
            or in my{' '}
            <Link
              className='super-link '
              href='https://docs.google.com/document/d/11PUbfty_1JoglcKOBdbIpGM-2BmThl-P-3T_51esxFM/edit?usp=sharing'
              target='_blank'
            >
              CV
            </Link>
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-3'>
            <Stack className='gap-3'>
              {about.tech_stack_primary.map(
                (tech: TechStackData, key: number) => (
                  <Stack.Item tooltip={tech.title} key={`tech-${key}`}>
                    <Image
                      src={getImageUrl(tech.icon).url()}
                      alt='Picture of the author'
                      width={33}
                      height={33}
                    />
                  </Stack.Item>
                )
              )}
            </Stack>
          </div>
          <p>
            I'm always up for a chat, collaboration, or new opportunities. Feel
            free to DM me. Together we can build something remarkable!
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-5 md:flex-row'>
            <Link href='/contacts'>
              <Button variant='secondary' className='h-10 w-full md:h-full'>
                Contacts
              </Button>
            </Link>
            <Link
              target='_blank'
              href='https://docs.google.com/document/d/11PUbfty_1JoglcKOBdbIpGM-2BmThl-P-3T_51esxFM/edit?usp=sharing'
            >
              <Button variant='secondary' className='h-10 w-full md:h-full'>
                CV
              </Button>
            </Link>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await client.fetch(
    `*[_type == "about"]{aboutText, links, tech_stack_primary[]->{title, icon}}`
  );

  return {
    props: {
      about: about[0],
    },
  };
}
