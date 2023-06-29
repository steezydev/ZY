import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Empty from '@/components/Empty';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';

import { fetchProjects } from '@/services/project.services';

import { ProjectData } from '@/types/project.types';

interface ProjectsPageProps {
  projects: ProjectData[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Layout>
      <Seo templateTitle='My works' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          {projects && projects.length != 0 ? (
            <div className='grid grid-cols-1 gap-4 gap-y-6 gap-x-8 md:grid-cols-2 md:gap-y-12'>
              {projects.map((item: ProjectData, key: number) => (
                <>
                  <Link
                    href={`/project/${item.id}`}
                    key={`project-${key}`}
                    className='flex flex-col items-center gap-3'
                  >
                    <div className='flex w-full flex-row gap-5'>
                      <div className='relative aspect-square h-32'>
                        <Image
                          src={
                            (
                              item.attributes.logo.data.attributes.formats
                                .medium ??
                              item.attributes.logo.data.attributes.formats
                                .thumbnail
                            ).url
                          }
                          alt='Project Image'
                          className='cursor-pointer object-contain'
                          fill
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='font-plain font-accent text-base'>
                          {item.attributes.title}
                        </span>
                        <span className='font-accent text-sm font-light text-white/50'>
                          {item.attributes.short_description}
                        </span>
                      </div>
                    </div>
                  </Link>
                  {key === projects.length - 1 ? null : (
                    <div className='flex w-full items-center justify-center md:hidden'>
                      <div className='w-10/12 border-x-0 border-y-0 border-b border-solid border-white/5 text-center' />
                    </div>
                  )}
                </>
              ))}
            </div>
          ) : (
            <div className='flex h-96 items-center justify-center'>
              <Empty>There is nothing in here yet ;(</Empty>
            </div>
          )}
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects: projects.data,
    },
  };
}
