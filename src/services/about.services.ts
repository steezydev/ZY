import axios from 'axios';

import { throwError } from '@/services/error.services';

const fetchAbout = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/about?populate[tech_stacks][populate]=*`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      }
    );

    const aboutData = res.data;

    return { status: 200, data: aboutData.data };
  } catch (error) {
    return throwError(error);
  }
};

export { fetchAbout };
