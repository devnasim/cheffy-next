/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import config from '../utils/config';

const client = axios.create({
  baseURL: `${config.BASE_URL}/`,
});

client.interceptors.request.use(
  function (configValues) {
    const token = localStorage.getItem('token');
    if (token) {
      configValues.headers.Authorization = `Bearer ${token}`;
    }
    return configValues;
  },
  function (error) {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    console.debug('Axios onResponseSuccess', response);
    return response.data;
  },
  (error) => {
    console.debug('Axios onResponseError', error.response);
  },
);

export default client;
