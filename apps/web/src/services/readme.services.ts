import axios from 'axios';

import { throwError } from '@/services/error.services';

const fetchReadme = async (path: string) => {
  try {
    const res = await axios.get(`https://raw.githubusercontent.com/${path}`);

    const README = res.data;

    return { status: 200, data: README };
  } catch (error) {
    return throwError(error);
  }
};

export { fetchReadme };
