import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Empty from '@/components/Empty';
import Head from '@/components/Head';
import Highlight from '@/components/Highlight';
import Layout from '@/components/Layout/Layout';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Seo from '@/components/Seo';
import Stack from '@/components/Stack';

import { fetchProjects } from '@/services/project.services';

import { ProjectData } from '@/types/project.types';

interface ProjectsPageProps {
  projects: ProjectData[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <main>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='min-h-screen pt-28'>
            <div className='layout'>
              <Head slogan='BÜILT DIFFËRËNT'>Projects</Head>
            </div>
            {projects && projects.length != 0 ? (
              <div className='mt-20 flex flex-col'>
                {projects.map((item: ProjectData, key: number) => (
                  <Link href={`/project/${item.id}`} key={`project-${key}`}>
                    <div className='row'>
                      <div className='layout flex flex-row gap-10'>
                        <div className='w-full border-0 border-b-[1px] border-dashed border-b-[#333333] py-6 md:w-4/5 md:border-b-0'>
                          <ProjectCard
                            image={
                              (
                                item.attributes.image.data.attributes.formats
                                  .medium ??
                                item.attributes.image.data.attributes.formats
                                  .thumbnail
                              ).url
                            }
                            className='max-w-full'
                          >
                            <div className='flex flex-row items-center justify-between'>
                              <ProjectCard.Slogan>
                                {item.attributes.subtitle}
                              </ProjectCard.Slogan>
                              <ProjectCard.Badge
                                className='md:absolute md:top-0 md:right-0'
                                variant={item.attributes.status.value}
                              >
                                {item.attributes.status.title}
                              </ProjectCard.Badge>
                            </div>
                            <ProjectCard.Title>
                              {item.attributes.title}
                            </ProjectCard.Title>
                            <ProjectCard.Body>
                              {item.attributes.description}
                            </ProjectCard.Body>
                            <Stack>
                              {item.attributes.tech_stack.data.map(
                                (tech, key) => (
                                  <Stack.Item
                                    tooltip={tech.attributes.title}
                                    key={`tech-${key}`}
                                  >
                                    <Image
                                      src={
                                        tech.attributes.icon.data.attributes.url
                                      }
                                      alt='Picture of the author'
                                      width={24}
                                      height={24}
                                    />
                                  </Stack.Item>
                                )
                              )}
                            </Stack>
                          </ProjectCard>
                        </div>
                        <svg
                          className='hidden lg:block'
                          width='1'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <line
                            x1='0.5'
                            y1='0'
                            x2='0.500014'
                            y2='100%'
                            stroke='#333333'
                            strokeDasharray='2 2'
                          />
                        </svg>
                        <div className='hidden py-6 lg:block'>
                          <div className='flex w-[327px] flex-row flex-wrap'>
                            {item.attributes.highlights.map(
                              (highlight, key) => (
                                <div
                                  key={`highlight-${key}`}
                                  className='flex aspect-square w-1/2 items-center justify-center'
                                >
                                  <Highlight title={highlight.title}>
                                    <Image
                                      src={highlight.icon.data.attributes.url}
                                      alt='Picture of the author'
                                      width={28}
                                      height={28}
                                    />
                                  </Highlight>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className='flex h-96 items-center justify-center'>
                <Empty>There is nothing in here yet ;(</Empty>
              </div>
            )}
          </div>
        </section>
      </main>
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
