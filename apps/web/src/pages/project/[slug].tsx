import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

import Bagelink from '@/components/Bagelink';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';
import SkeletonImage from '@/components/SkeletonImage';
import Stack from '@/components/Stack';

import {
  LinkData,
  ProjectData,
  SlugData,
  TechStackData,
} from '@/types/data.types';

import ZYLoader from '~/svg/ZYLoader.svg';

interface ProjectProps {
  projectData: ProjectData;
}

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
          <p>{projectData.description}</p>
          <div className='flex flex-col gap-2'>
            <span className='font-accent text-sm font-light text-white/50'>
              Tech stack
            </span>
            <Stack>
              {projectData.tech_stack.map(
                (tech: TechStackData, key: number) => (
                  <Stack.Item tooltip={tech.title} key={`tech-${key}`}>
                    <Image
                      src={getImageUrl(tech.icon).url()}
                      alt='Picture of the author'
                      width={25}
                      height={25}
                    />
                  </Stack.Item>
                )
              )}
            </Stack>
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
