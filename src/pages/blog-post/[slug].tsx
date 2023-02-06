import { motion } from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { isoToString } from '@/lib/dates';

import Badge from '@/components/Badge';
import Seo from '@/components/Seo';

import Layout from '@/Layout/Layout';
import { getPostData } from '@/services/blog.services';

import { BlogData } from '@/types/blog.types';

interface BlogPostProps {
  blogData: BlogData;
}

export default function BlogPost({ blogData }: BlogPostProps) {
  return (
    <Layout>
      <Seo templateTitle={blogData.attributes.title} />
      <main>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='min-h-screen py-10'>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: 'spring',
                mass: 0.45,
              }}
              className='border-0 border-b-2 border-solid border-[#151515] py-12 md:py-20'
            >
              <div className='layout flex flex-col gap-8'>
                <div className='flex flex-row items-center gap-7'>
                  {blogData.attributes.status ? (
                    <Badge variant={blogData.attributes.status.value}>
                      {blogData.attributes.status.title}
                    </Badge>
                  ) : null}
                  <span className='text-base text-secondary'>
                    {isoToString(blogData.attributes.publishedAt)}
                  </span>
                </div>
                <span className='text-4xl font-black leading-none text-white md:text-6xl'>
                  {blogData.attributes.title}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: 'spring',
                mass: 0.45,
              }}
              className='layout mt-10 text-white'
            >
              <ReactMarkdown>{blogData.attributes.text}</ReactMarkdown>
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
  params: { slug: string };
}) {
  const blogData = await getPostData(params.slug);

  if (blogData.status == 404) {
    return {
      notFound: true,
    };
  } else if (blogData.status == 500) {
    throw new TypeError('Oops, something went wrong ;(');
  }

  return {
    props: {
      slug: params.slug,
      blogData: blogData.data,
    },
  };
}
