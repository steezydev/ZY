import axios from 'axios';

import { throwError } from '@/services/error.services';

const getProjectData = async (id: number) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}?populate[image][populate]=*&populate[highlights][populate]=*&populate[tech_stack][populate]=*&populate[status][populate]=*&populate[screenshots][populate]=*&populate[additional_links][populate]=*`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      }
    );

    const projectData = res.data;

    return { status: 200, data: projectData.data };
  } catch (error) {
    return throwError(error);
  }
};

const fetchProjects = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects?sort[0]=rank%3Aasc&populate[image][populate]=*&populate[highlights][populate]=*&populate[tech_stack][populate]=*&populate[status][populate]=*`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      }
    );

    const projectData = res.data;

    return { status: 200, data: projectData.data };
  } catch (error) {
    return throwError(error);
  }
};

export { fetchProjects, getProjectData };
