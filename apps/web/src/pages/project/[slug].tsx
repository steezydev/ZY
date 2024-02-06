import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

import Bagelink from '@/components/bagelink/Badgelink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/seo/Seo';
import SkeletonImage from '@/components/skeleton/SkeletonImage';
import TechStack from '@/components/techstack/TechStack';
import TechStackItem from '@/components/techstack/TechStackItem';

import { LinkData } from '@/types/data/LinkData';
import { SlugData } from '@/types/data/SlugData';
import { TechStackData } from '@/types/data/TechStackData';
import { ProjectProps } from '@/types/props/ProjectProps';

import ZYLoader from '~/svg/ZYLoader.svg';

export default function Project({ projectData }: ProjectProps) {
  return (
    <Layout>
      <Seo templateTitle={projectData.title} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <SkeletonImage
            src={getImageUrl(projectData.image).url()}
            fill
            className='relative h-48 w-full'
            loaderSvg={<ZYLoader height={152} width={152} className='w-full' />}
          />
          <h1 className='mt-10'>{projectData.title}</h1>
          <div className='mb-6 mt-4 flex flex-wrap gap-2'>
            {projectData.links.map(({ label, url }: LinkData, key: number) => (
              <Bagelink href={url} key={`link-${key}`}>
                {label}
              </Bagelink>
            ))}
          </div>
          <PortableText
            value={projectData.body}
            components={{
              marks: {
                link: ({ value, children }) => (
                  <Link
                    className='super-link '
                    href={value.href}
                    target='_blank'
                  >
                    {children}
                  </Link>
                ),
              },
            }}
          />
          <div className='flex flex-col gap-2'>
            <span className='font-accent text-sm font-light text-white/50'>
              Tech stack
            </span>
            <TechStack>
              {projectData.tech_stack.map(
                (tech: TechStackData, key: number) => (
                  <TechStackItem tooltip={tech.title} key={`tech-${key}`}>
                    <Image
                      src={getImageUrl(tech.icon).url()}
                      alt='Picture of the author'
                      width={25}
                      height={25}
                    />
                  </TechStackItem>
                )
              )}
            </TechStack>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const projectSlugs = await client.fetch(`*[_type == "project"]{slug}`);

  const paths = projectSlugs.map(({ slug }: { slug: SlugData }) => {
    return {
      params: {
        slug: slug.current,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projectData = await client.fetch(
    `*[_type == "project" && slug.current == "${params.slug}"]{
      title,
      description,
      body,
      image,
      links,
      tech_stack[]->{title, icon}
    }`
  );

  return {
    props: {
      slug: params.slug,
      projectData: projectData[0],
    },
    //TODO: Try using on-demand revalidation https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
  };
}
