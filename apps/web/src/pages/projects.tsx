import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import Empty from '@/components/Empty';
import Layout from '@/components/Layout/Layout';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Seo from '@/components/Seo';

import { ProjectData } from '@/types/project.types';
import client from '@/lib/client';
import { getImageUrl } from '@/lib/image';

interface ProjectsPageProps {
  projects: ProjectData[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  console.log()

  return (
    <Layout>
      <Seo templateTitle='My works' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='layout'>
          {projects && projects.length != 0 ? (
            <div className='grid grid-cols-1 gap-4 gap-y-6 gap-x-8 md:grid-cols-2 md:gap-y-12'>
              {projects.map((item: any, key: number) => (
                <>
                  <Link
                    href={`/project/${item.slug.current}`}
                    key={`project-${item._id}`}
                    className='flex flex-col items-center gap-3'
                  >
                    <ProjectCard
                      image={getImageUrl(item.logo).url()}
                    >
                      <ProjectCard.Title>
                        {item.title}
                      </ProjectCard.Title>
                      <ProjectCard.Body>
                        {item.short_description}
                      </ProjectCard.Body>
                    </ProjectCard>
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
  const projects = await client.fetch(`*[_type == "project"]`);

  return {
    props: {
      projects: projects,
    },
  };
}
