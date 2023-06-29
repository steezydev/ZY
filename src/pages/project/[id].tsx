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

interface ProjectProps {
  id: number;
  projectData: ProjectData;
}
import ZYLoader from '~/svg/ZYLoader.svg';

export default function Project({ projectData }: ProjectProps) {
  return (
    <Layout>
      <Seo templateTitle={projectData.attributes.title} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          <SkeletonImage
            src={
              (
                projectData.attributes.image.data.attributes.formats.medium ??
                projectData.attributes.image.data.attributes.formats.thumbnail
              ).url
            }
            fill
            className='relative h-48 w-full'
            loaderSvg={<ZYLoader height={152} width={152} className='w-full' />}
          />
          <h1 className='mt-10'>{projectData.attributes.title}</h1>
          <div className='mt-4 mb-6 flex flex-wrap gap-2'>
            {projectData.attributes.links.map((link: LinkData, key: number) => (
              <Bagelink href={link.link} key={`link-${key}`}>
                {link.label}
              </Bagelink>
            ))}
          </div>
          <p>{projectData.attributes.description}</p>
          <div className='flex flex-col gap-2'>
            <span className='font-accent text-sm font-light text-white/50'>
              Tech stack
            </span>
            <Stack>
              {projectData.attributes.tech_stack.data.map(
                (tech: TechStack, key: number) => (
                  <Stack.Item
                    tooltip={tech.attributes.title}
                    key={`tech-${key}`}
                  >
                    <Image
                      src={tech.attributes.icon.data.attributes.url}
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

//TODO: Remove getServerSideProps and fetch data after load
export async function getServerSideProps({
  params,
}: {
  params: { id: number };
}) {
  const projectData = await getProjectData(params.id);

  if (projectData.status == 404) {
    return {
      notFound: true,
    };
  } else if (projectData.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  return {
    props: {
      id: params.id,
      projectData: projectData.data,
    },
  };
}
