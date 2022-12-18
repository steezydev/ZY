import axios from 'axios';

import { throwError } from '@/services/error.services';

const getPostData = async (slug: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/slugify/slugs/blog/${slug}?populate[status][populate]=*`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      }
    );

    const blogData = res.data;

    return { status: 200, data: blogData.data };
  } catch (error) {
    return throwError(error);
  }
};

const fetchBlogPosts = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate[status][populate]=*`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      }
    );

    const blogData = res.data;

    return { status: 200, data: blogData.data };
  } catch (error) {
    return throwError(error);
  }
};

export { fetchBlogPosts, getPostData };
