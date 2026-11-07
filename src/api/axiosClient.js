import axios from 'axios';

// Axios global configuration
export const axiosClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});