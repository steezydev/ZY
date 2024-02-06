import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

import ContentPlaceholder from '@/components/contentplaceholder/ContentPlaceholder';
import Layout from '@/components/layout/Layout';
import ProjectCard from '@/components/projectcard/ProjectCard';
import Seo from '@/components/seo/Seo';

import { ProjectData } from '@/types/data/ProjectData';
import { ProjectsPageProps } from '@/types/props/ProjectsPageProps';

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Layout>
      <Seo templateTitle='My works' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          {projects && projects.length != 0 ? (
            <div className='grid grid-cols-1 gap-4 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12'>
              {projects.map((item: ProjectData, key: number) => (
                <React.Fragment key={`project-${key}`}>
                  <Link
                    aria-label={`Go to project ${item.title} page`}
                    href={`/project/${item.slug.current}`}
                    className='flex flex-col items-center gap-3  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple'
                  >
                    <ProjectCard
                      title={item.title}
                      description={item.short_description}
                      image={getImageUrl(item.logo).url()}
                    />
                  </Link>
                  {key === projects.length - 1 ? null : (
                    <div className='flex w-full items-center justify-center md:hidden'>
                      <div className='w-10/12 border-x-0 border-y-0 border-b border-solid border-white/5 text-center' />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className='flex h-96 items-center justify-center'>
              <ContentPlaceholder>
                There is nothing in here yet ;(
              </ContentPlaceholder>
            </div>
          )}
        </section>
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project"] | order(releaseDate desc) {title, short_description, logo, slug}`
  );
  return {
    props: {
      projects: projects,
    },
  };
}
