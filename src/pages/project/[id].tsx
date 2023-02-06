import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';
import Lock from '@/components/Lock';
import Logo from '@/components/Logo';
import Readme from '@/components/Readme/Readme';
import Seo from '@/components/Seo';
import Stack from '@/components/Stack';

import Layout from '@/Layout/Layout';
import { getProjectData } from '@/services/project.services';
import { fetchReadme } from '@/services/readme.services';

import { LinkData } from '@/types/link.types';
import { ProjectData } from '@/types/project.types';
import { TechStack } from '@/types/tech.types';

import ArrowL from '~/svg/ArrowL.svg';

interface ProjectProps {
  id: number;
  projectData: ProjectData;
  readme: string;
}

export default function Project({ projectData, readme }: ProjectProps) {
  return (
    <Layout hideHeader hideFooter>
      <Seo templateTitle={projectData.attributes.title} />
      <main>
        <section>
          <div className='h-screen'>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: 'spring',
                mass: 0.45,
              }}
              className='lg:2/5 relative float-left min-h-screen w-full overflow-y-scroll border-0 border-r-2 border-solid border-[#151515] px-4 backdrop-blur-sm xl:w-1/5'
            >
              <div className='flex w-full items-center justify-between border-0 border-b-2 border-solid border-[#151515] py-2'>
                <CustomLink
                  icon={
                    <span className='flex items-center text-2xl'>
                      <ArrowL />
                    </span>
                  }
                  href='/projects'
                >
                  Projects
                </CustomLink>
                <Logo />
              </div>
              <div className='relative my-3 mt-4 h-40 w-full'>
                <Image
                  src={
                    (
                      projectData.attributes.image.data.attributes.formats
                        .medium ??
                      projectData.attributes.image.data.attributes.formats
                        .thumbnail
                    ).url
                  }
                  className='object-contain'
                  alt='Image'
                  fill
                />
              </div>
              <div className='flex flex-col gap-3 border-0 border-b-2 border-solid border-[#686868] py-4 md:px-8'>
                <div className='flex flex-row items-center gap-2'>
                  <Badge variant={projectData.attributes.status.value}>
                    {projectData.attributes.status.title}
                  </Badge>
                  <span className='flex justify-center text-2xl'>
                    <Lock isClosed={projectData.attributes.isPrivate} />
                  </span>
                </div>
                <span className='text font-accent font-semibold uppercase text-secondary'>
                  {projectData.attributes.subtitle}
                </span>
                <span className='text-4xl font-black text-white'>
                  {projectData.attributes.title}
                </span>
              </div>
              <div className='flex flex-col gap-4 py-4 md:px-8'>
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
                          width={30}
                          height={30}
                        />
                      </Stack.Item>
                    )
                  )}
                </Stack>
                <span className='text-base leading-5 text-white'>
                  {projectData.attributes.description}
                </span>
                <div className='mt-5 flex w-full flex-col gap-4'>
                  {projectData.attributes.link ? (
                    <Link href={projectData.attributes.link} target='_blank'>
                      <Button variant='solid' className='w-full'>
                        Visit
                      </Button>
                    </Link>
                  ) : (
                    <Button variant='outline' disabled className='w-full'>
                      Visit
                    </Button>
                  )}
                  <Button variant='outline' className='w-full lg:hidden'>
                    Preview
                  </Button>
                  <div className='mt-3 flex flex-row flex-wrap justify-around gap-5 pb-16 md:mt-0'>
                    {projectData.attributes.additional_links.map(
                      (link: LinkData, key: number) => (
                        <CustomLink
                          newTab
                          key={`additional_link-${key}`}
                          href={link.link}
                        >
                          {link.label}
                        </CustomLink>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='hidden h-full overflow-y-scroll px-64 py-8 lg:block lg:w-3/5 xl:w-4/5'
            >
              {readme ? (
                <Readme>{readme}</Readme>
              ) : (
                <div className='flex h-full flex-col items-center justify-center gap-8 px-32 py-8'>
                  <div className='relative my-3 mt-4 h-72 w-full'>
                    <Image
                      src={
                        (
                          projectData.attributes.image.data.attributes.formats
                            .medium ??
                          projectData.attributes.image.data.attributes.formats
                            .thumbnail
                        ).url
                      }
                      className='object-contain'
                      alt='Image'
                      fill
                    />
                  </div>
                  <span className='text-2xl font-semibold text-footerText'>
                    There will be a detailed project README...
                  </span>
                </div>
              )}
            </motion.div>
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
  const readme = await fetchReadme(projectData.data.attributes.readme_path);

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
      readme: readme.data,
    },
  };
}
