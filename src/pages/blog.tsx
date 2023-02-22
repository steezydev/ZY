import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { isoToString } from '@/lib/dates';

import Badge from '@/components/Badge';
import BlogCard from '@/components/BlogCard';
import Empty from '@/components/Empty';
import Head from '@/components/Head';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo';
import SlideBlock from '@/components/SlideBlock/SlideBlock';

import { fetchBlogPosts } from '@/services/blog.services';

import { BlogData } from '@/types/blog.types';

interface BlogPageProps {
  blogs: BlogData[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <Layout>
      <Seo templateTitle='Blog' />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='layout min-h-screen pt-20 md:pt-28'>
            <Head slogan='CHËCK EM ÖUT'>Blog</Head>
            {blogs && blogs.length > 0 ? (
              <div className='mt-20 flex flex-col md:grid md:grid-cols-2 md:gap-10'>
                {blogs.map((item: BlogData, key: number) => (
                  <Link
                    href={`/blog-post/${item.attributes.slug}`}
                    className='slidingLink border-0 border-b-[1px] border-solid border-b-[#333333] bg-gradient-to-r from-white to-white py-8 md:border-b-0 md:py-6'
                    key={`blog-${key}`}
                  >
                    <SlideBlock
                      tagName='div'
                      delay={key * 0.1}
                      className='w-full'
                    >
                      <BlogCard>
                        <div className='flex flex-row items-center justify-between'>
                          <BlogCard.Date>
                            {isoToString(item.attributes.publishedAt)}
                          </BlogCard.Date>
                          {item.attributes.status ? (
                            <Badge variant={item.attributes.status.value}>
                              {item.attributes.status.title}
                            </Badge>
                          ) : null}
                        </div>
                        <BlogCard.Title>{item.attributes.title}</BlogCard.Title>
                        <BlogCard.Body>
                          {item.attributes.description}
                        </BlogCard.Body>
                      </BlogCard>
                    </SlideBlock>
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
      </motion.main>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await fetchBlogPosts();

  return {
    props: {
      blogs: blogs.data,
    },
  };
}
