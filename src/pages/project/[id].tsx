import Image from 'next/image';
import React from 'react';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Stack from '@/components/Stack';

import { getProjectData } from '@/services/project.services';

import { ProjectData } from '@/types/project.types';
import { TechStack } from '@/types/tech.types';

interface ProjectProps {
  id: number;
  projectData: ProjectData;
}

export default function Project({ projectData }: ProjectProps) {
  return (
    <Layout showHeader={false}>
      <Seo templateTitle={projectData.attributes.title} />
      <main>
        <section>
          <div className='min-h-screen'>
            <div className='absolute top-0 left-0 h-12 w-full rounded-b-3xl bg-greySecondary'></div>
            <div className='flex min-h-screen w-full flex-row pt-10'>
              <div className='h-full w-1/5 border-0 border-r-2 border-solid border-[#151515] px-4'>
                <div className='relative my-7 h-40 w-full'>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      projectData.attributes.image.data.attributes.formats
                        .medium.url
                    }
                    className='object-contain'
                    alt='Image'
                    fill
                  />
                </div>
                <div className='flex flex-col gap-3 border-0 border-b-2 border-solid border-[#686868] px-8 py-4'>
                  <Badge variant={projectData.attributes.status.value}>
                    {projectData.attributes.status.title}
                  </Badge>
                  <span className='text font-accent font-semibold uppercase text-secondary'>
                    {projectData.attributes.subtitle}
                  </span>
                  <span className='text-2xl font-black text-white md:text-4xl'>
                    {projectData.attributes.title}
                  </span>
                </div>
                <div className='flex flex-col gap-4 px-8 py-4'>
                  <Stack>
                    {projectData.attributes.tech_stack.data.map(
                      (tech: TechStack, key: number) => (
                        <Stack.Item
                          tooltip={tech.attributes.tooltip}
                          key={`tech-${key}`}
                        >
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API_URL +
                              tech.attributes.icon.data.attributes.url
                            }
                            alt='Picture of the author'
                            width={30}
                            height={30}
                          />
                        </Stack.Item>
                      )
                    )}
                  </Stack>
                  <span className='leading-5 text-white'>
                    {projectData.attributes.description}
                  </span>
                  <div className='mt-5 flex w-full flex-col gap-4'>
                    <Button variant='outline' className='w-full'>
                      Visit
                    </Button>
                    <div className='flex flex-row justify-around'>
                      <CustomLink href='#'>Github</CustomLink>
                      <CustomLink href='#'>Docs</CustomLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-full w-3/4'></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

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
