import { AxiosError, AxiosInstance } from 'axios';

const handleError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(
      `${error.response.status} (${
        error.response.headers['content-type']
      }) ${JSON.stringify(error.response.data)}`
    );
  }
  throw error;
};

export const intercept = (inst: AxiosInstance) => {
  inst.interceptors.response.use(null, handleError);
};
