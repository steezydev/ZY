import Link from 'next/link';
import React from 'react';

import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { fetchAbout } from '@/services/about.services';

import { TechStack } from '@/types/tech.types';

import Discord from '~/svg/Discord.svg';
import Next from '~/svg/Next.svg';
import Telegram from '~/svg/Telegram.svg';
import Twitter from '~/svg/Twitter.svg';

interface AboutData {
  id: number;
  attributes: {
    about: string;
    telegram: string;
    discord: string;
    twitter: string;
    tech_stacks: {
      data: TechStack[];
    };
  };
}

interface AboutBlockProps {
  title: string;
  children: React.ReactNode;
}

interface AboutPageProps {
  about: AboutData;
}

function AboutBlock({ title, children }: AboutBlockProps) {
  return (
    <div className='flex flex-col gap-14 text-white'>
      <div className='flex w-full items-center justify-center'>
        <h2 className=' font-display text-4xl font-normal'>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function AboutPage({ about }: AboutPageProps) {
  return (
    <Layout>
      <Seo templateTitle='About' />

      <main>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='min-h-screen pt-28'>
            <div className='layout mt-12 flex flex-col items-center pb-16'>
              <div className='text-glow font-display text-[12rem] font-bold leading-[10rem] text-white'>
                ZY
              </div>
              <div className='mt-24 flex max-w-[55rem] flex-col gap-16'>
                {about.attributes.about ? (
                  <AboutBlock title='About me'>
                    <div className='text-lg'>{about.attributes.about}</div>
                  </AboutBlock>
                ) : null}
                {about.attributes.tech_stacks ? (
                  <AboutBlock title='Skills'>
                    <div className='grid grid-cols-2 flex-wrap gap-x-0 gap-y-16 md:flex md:flex-row md:items-center md:justify-around md:gap-5'>
                      {about.attributes.tech_stacks.data.map((tech, key) => (
                        <div
                          key={`skill-${key}`}
                          className='flex flex-col items-center justify-center gap-1'
                        >
                          <span className='text-5xl'>
                            <Next />
                          </span>
                          <span className='text-xl'>
                            {tech.attributes.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AboutBlock>
                ) : null}
                {about.attributes.tech_stacks ? (
                  <AboutBlock title='Contact me'>
                    <div className='flex flex-row items-center justify-center gap-16 text-5xl md:text-7xl'>
                      {about.attributes.telegram ? (
                        <Link target='_blank' href={about.attributes.telegram}>
                          <Telegram />
                        </Link>
                      ) : null}
                      {about.attributes.discord ? (
                        <Link target='_blank' href={about.attributes.discord}>
                          <Discord />
                        </Link>
                      ) : null}
                      {about.attributes.twitter ? (
                        <Link target='_blank' href={about.attributes.twitter}>
                          <Twitter />
                        </Link>
                      ) : null}
                    </div>
                  </AboutBlock>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>
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
