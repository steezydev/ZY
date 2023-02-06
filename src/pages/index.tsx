import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import ArrowR from '~/svg/ArrowR.svg';
import DI from '~/svg/DILogo.svg';
import Duhovka from '~/svg/DuhovkaLogo.svg';
import WY from '~/svg/WYLogo.svg';

const links = [
  { title: 'Projects', link: '/projects' },
  { title: 'Blog', link: '/blog' },
  { title: 'About', link: '/about' },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='min-h-screen pt-28'>
            <div className='flex flex-row pb-16 md:mt-12'>
              <div className='flex w-full justify-center md:w-1/2'>
                <div className='flex flex-col items-center justify-center gap-8 md:w-4/5 md:gap-14'>
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
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
                  <motion.span
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: 'spring',
                      stiffness: 100,
                      mass: 0.5,
                    }}
                    className='font-accent text-2xl font-bold md:text-3xl'
                  >
                    Digital gallery ~ Portfolio
                  </motion.span>
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: 'spring',
                      stiffness: 100,
                      mass: 0.5,
                    }}
                    className='w-11/12 text-center text-white md:w-3/4'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eu erat rhoncus, sollicitudin purus ac, tristique lorem.
                    Phasellus a tincidunt turpis, ac faucibus lacus. Aliquam non
                    convallis nunc. Vestibulum scelerisque nibh urna, sed
                    imperdiet urna convallis et. Etiam pharetra pellentesque
                    eros tincidunt pellentesque.
                  </motion.div>
                  <div className='flex w-full flex-row flex-wrap items-center justify-around'>
                    <motion.span
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.25,
                        type: 'spring',
                        stiffness: 100,
                        mass: 0.5,
                      }}
                      className='text-8xl'
                    >
                      <WY />
                    </motion.span>
                    <motion.span
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.27,
                        type: 'spring',
                        stiffness: 100,
                        mass: 0.5,
                      }}
                      className='text-[10rem]'
                    >
                      <Duhovka />
                    </motion.span>
                    <motion.span
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        type: 'spring',
                        stiffness: 100,
                        mass: 0.5,
                      }}
                      className='text-[10rem]'
                    >
                      <DI />
                    </motion.span>
                  </div>
                </div>
              </div>
              <div className='hidden w-1/2 md:flex'>
                <div className='flex w-full flex-col font-display font-semibold'>
                  {links.map((value, key) => (
                    <Link href={value.link} key={`nav-key-${key}`}>
                      <div className='group flex h-52 w-full flex-row items-center justify-between border-0 border-b-2 border-solid border-[#303030] pl-8 pr-20 transition-all hover:pr-16'>
                        <span className='text-6xl'>{value.title}</span>
                        <span className='fill-white text-5xl text-white'>
                          <ArrowR className='fill-[#696969] transition-colors group-hover:fill-white' />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
