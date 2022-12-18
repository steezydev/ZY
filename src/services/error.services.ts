import axios from 'axios';

const throwError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return {
      status: error.response?.status || 500,
      data: null,
      error: error.response?.statusText || 'Unexpected error',
    };
  } else {
    return {
      status: 500,
      data: null,
      error: 'Unexpected error',
    };
  }
};

export { throwError };
