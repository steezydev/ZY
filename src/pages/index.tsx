import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';
import SlideBlock from '@/components/SlideBlock/SlideBlock';

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
      <main className='flex-grow'>
        <section className=''>
          <div className='pt-16 md:pt-28'>
            <div className='flex flex-row pb-16 md:mt-12'>
              <div className='flex w-full justify-center md:w-1/2'>
                <div className='flex flex-col items-center justify-center gap-8 md:w-4/5 md:gap-14'>
                  <SlideBlock className='text-glow w-full text-center font-display text-[11rem] font-bold leading-[13rem] text-white md:text-[16rem]'>
                    ZY
                  </SlideBlock>
                  <SlideBlock
                    delay={0.1}
                    className='font-accent text-2xl font-bold md:text-3xl'
                  >
                    Digital gallery ~ Portfolio
                  </SlideBlock>
                  <SlideBlock
                    delay={0.1}
                    className='w-11/12 text-center text-white md:w-3/4'
                  >
                    Created in mid-2022 as a cornerstone of the creator's
                    digital identity, ZY embodies the philosophy of imaginative
                    construction and development. At the core of ZY lies the
                    values of freedom, unique style, and innovation, providing a
                    space for endless possibilities and endless growth. Take the
                    first step towards self-expression and join the journey with
                    ZY today.
                  </SlideBlock>
                  <div className='flex w-full flex-row flex-wrap items-center justify-around'>
                    <SlideBlock delay={0.25} className='text-8xl'>
                      <WY />
                    </SlideBlock>
                    <SlideBlock delay={0.27} className='text-[10rem]'>
                      <Duhovka />
                    </SlideBlock>
                    <SlideBlock delay={0.3} className='text-[10rem]'>
                      <DI />
                    </SlideBlock>
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
