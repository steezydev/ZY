import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Bagelink from '@/components/Bagelink';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';
import SkeletonImage from '@/components/SkeletonImage/SkeletonImage';
import Stack from '@/components/Stack';

import { getProjectData } from '@/services/project.services';

import { LinkData } from '@/types/link.types';
import { ProjectData } from '@/types/project.types';
import { TechStack } from '@/types/tech.types';


import ZYLoader from '~/svg/ZYLoader.svg';
import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

interface ProjectProps {
  slug: string;
  projectData: ProjectData;
}

export default function Project({ slug, projectData }: ProjectProps) {
  console.log(projectData)

  return (
    <Layout>
      <Seo templateTitle={projectData.title} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <SkeletonImage
            src={getImageUrl(projectData.image).url() }
            fill
            className='relative h-48 w-full'
            loaderSvg={<ZYLoader height={152} width={152} className='w-full' />}
          />
          <h1 className='mt-10'>{projectData.title}</h1>
          <div className='mt-4 mb-6 flex flex-wrap gap-2'>
            {projectData.links.map(({label, url}: LinkData, key: number) => (
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
                (tech: TechStack, key: number) => (
                  <Stack.Item
                    tooltip={tech.title}
                    key={`tech-${key}`}
                  >
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

export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  const projectData = await client.fetch(
    `*[_type == "project" && slug.current == "${params.slug}"]{
      title,
      description,
      image,
      links,
      tech_stack[]->{title, icon}
    }`
    );

  if (projectData.length <= 0) {
    return {
      notFound: true,
    };
  } else if (projectData.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  return {
    props: {
      slug: params.slug,
      projectData: projectData[0],
    },
  };
}
