import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { fetchAbout } from '@/services/about.services';

import { AboutData } from '@/types/about.types';

import DI from '~/svg/DILogo.svg';
import Discord from '~/svg/Discord.svg';
import Duhovka from '~/svg/DuhovkaLogo.svg';
import Telegram from '~/svg/Telegram.svg';
import Twitter from '~/svg/Twitter.svg';
import WY from '~/svg/WYLogo.svg';

const MotionLink = motion(Link);

interface AboutPageProps {
  about: AboutData;
}

interface AboutLinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

function AboutLink({ href, children, delay = 0 }: AboutLinkProps) {
  return (
    <MotionLink
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 100,
        mass: 0.5,
      }}
      className='text-5xl md:text-4xl'
      target='_blank'
      href={href}
    >
      {children}
    </MotionLink>
  );
}

export default function AboutPage({ about }: AboutPageProps) {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='fixed right-16 bottom-12 hidden flex-col gap-5 md:flex'>
            <AboutLink delay={1} href={about.attributes.twitter}>
              <Twitter />
            </AboutLink>
            <AboutLink delay={1.1} href={about.attributes.telegram}>
              <Telegram />
            </AboutLink>
            <AboutLink delay={1.2} href={about.attributes.discord}>
              <Discord />
            </AboutLink>
          </div>
          <div className='min-h-screen pt-16'>
            <div className='layout mt-12 flex flex-col items-center pb-16'>
              <div className='flex flex-col items-center justify-center gap-8 md:w-4/5 md:gap-14'>
                <motion.div
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    type: 'spring',
                    stiffness: 100,
                    mass: 0.5,
                  }}
                  className='text-glow w-full text-center font-display text-[11rem] font-bold leading-[13rem] text-white md:text-[16rem]'
                >
                  ZY
                </motion.div>
                <span className='font-accent text-2xl font-bold md:text-3xl'>
                  Digital gallery ~ Portfolio
                </span>
              </div>
              <div className='mt-16 flex max-w-5xl flex-col gap-5'>
                <div className='text-xl'>{about.attributes.title}</div>
                <div className='flex w-full flex-row flex-wrap items-center justify-around md:justify-center md:gap-20'>
                  <span className='text-6xl md:text-8xl'>
                    <WY />
                  </span>
                  <span className='text-7xl md:text-[10rem]'>
                    <Duhovka />
                  </span>
                  <span className='text-7xl md:text-[10rem]'>
                    <DI />
                  </span>
                </div>
                <div className='text-base'>{about.attributes.about}</div>
              </div>

              <div className='mt-14 flex w-full flex-row items-center justify-around md:hidden'>
                <AboutLink delay={1} href={about.attributes.twitter}>
                  <Twitter />
                </AboutLink>
                <AboutLink delay={1.1} href={about.attributes.telegram}>
                  <Telegram />
                </AboutLink>
                <AboutLink delay={1.2} href={about.attributes.discord}>
                  <Discord />
                </AboutLink>
              </div>
            </div>
          </div>
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
