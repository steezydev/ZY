import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsTwitter } from 'react-icons/bs';

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
            I'm both a developer and a designer. My coding adventure began in{' '}
            <strong>2018</strong>, and since then, I've immersed myself in web
            and mobile development, continually refining my craft. Over the
            years, I've contributed to <strong>20+</strong> commercial projects,
            showcasing my prowess in both back-end and front-end development.
          </p>
          <p>
            Outside of my primary work, I moonlight as an indie-hacker &
            blockchain enthusiast. I indulge in creating my own projects and
            startups, and often share insights on my Twitter.
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-5 md:flex-row'>
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
                Twitter life
              </Button>
            </Link>
          </div>
          <p>
            Throughout my journey, I've explored numerous libraries and
            technologies, picking up indispensable skills that now define my
            work. My main tech stack consists of Typescript, Next.js,
            TailwindCSS and React Native. A full list of my skills is avaiable
            on{' '}
            <Link
              className='super-link '
              href='https://github.com/steezydev'
              target='_blank'
            >
              GitHub
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
            free to DM me. Together we can craft something remarkable!
          </p>
          <div className='mb-10 mt-8 flex flex-col gap-5 md:flex-row'>
            <Link href='/contacts'>
              <Button variant='secondary' className='h-10 w-full md:h-full'>
                Contacts
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
