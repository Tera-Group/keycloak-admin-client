import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios';

export const createAxiosInstance = (config?: CreateAxiosDefaults<any>) => {
  const inst = axios.create(config);
  inst.interceptors.response.use(logRequest, logErrorResponsePayload);
  return inst;
};

const logRequest = (resp: AxiosResponse) => {
  console.log(
    `${resp.status} ${resp.config.method?.toUpperCase()} ${resp.config.url}`
  );
  return resp;
};

const logErrorResponsePayload = (error: AxiosError) => {
  if (error.response) {
    const resp = error.response;
    const data =
      resp.headers['content-type'].indexOf('application/json') !== -1
        ? resp.data
        : null;
    console.error(
      `${resp.status} ${resp.config.method?.toUpperCase()} ${resp.config.url}${
        data ? `\n\t${JSON.stringify(data, null, 2).replace('\n', '\n\t')}` : ''
      }`
    );
  }
  throw error;
};
