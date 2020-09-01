import * as axios from 'axios';
import { AUTH_TOKEN } from '../constants';

const api = axios.create({
  // TODO move to ENV
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default api;
