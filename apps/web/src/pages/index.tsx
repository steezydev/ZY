import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/seo/Seo';
import TechStack from '@/components/techstack/TechStack';
import TechStackItem from '@/components/techstack/TechStackItem';
import H2 from '@/components/typography/H2';

import { TechStackData } from '@/types/data/TechStackData';
import { HomePageProps } from '@/types/props/HomePageProps';

export default function HomePage({ about }: HomePageProps) {
  return (
    <Layout>
      <Seo />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <H2 className='mb-10'>Hi, I'm steezy!</H2>
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
              <Button
                ariaLabel='Go to projects page'
                className='h-10 w-full md:h-full'
              >
                Check out my projects
              </Button>
            </Link>
          </div>
          <p>
            My main tech stack consists of Typescript, Next.js, TailwindCSS and
            React Native. A full list of my skills is available on{' '}
            <Link
              aria-label='Go to GitHub profile'
              className='super-link focus:outline-none focus-visible:ring-2 focus-visible:ring-purple'
              href='https://github.com/steezydev'
              target='_blank'
            >
              GitHub
            </Link>{' '}
            or in my{' '}
            <Link
              aria-label='Go to CV document'
              className='super-link focus:outline-none focus-visible:ring-2 focus-visible:ring-purple'
              href='https://docs.google.com/document/d/11PUbfty_1JoglcKOBdbIpGM-2BmThl-P-3T_51esxFM/edit?usp=sharing'
              target='_blank'
            >
              CV
            </Link>
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-3'>
            <TechStack className='gap-3'>
              {about.tech_stack_primary.map(
                (tech: TechStackData, key: number) => (
                  <TechStackItem tooltip={tech.title} key={`tech-${key}`}>
                    <Image
                      src={getImageUrl(tech.icon).url()}
                      alt='Picture of the author'
                      width={33}
                      height={33}
                    />
                  </TechStackItem>
                )
              )}
            </TechStack>
          </div>
          <p>
            I'm always up for a chat, collaboration, or new opportunities. Feel
            free to DM me. Together we can build something remarkable!
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-5 md:flex-row'>
            <Link aria-label='Go to contacts page' href='/contacts'>
              <Button
                ariaLabel='Go to contacts page'
                variant='secondary'
                className='h-10 w-full md:h-full'
              >
                Contacts
              </Button>
            </Link>
            <Link
              aria-label='Go to CV document'
              target='_blank'
              href='https://docs.google.com/document/d/11PUbfty_1JoglcKOBdbIpGM-2BmThl-P-3T_51esxFM/edit?usp=sharing'
            >
              <Button
                ariaLabel='Go to CV document'
                variant='secondary'
                className='h-10 w-full md:h-full'
              >
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
