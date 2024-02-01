import axios from 'axios';
import Cookies from 'js-cookie';

export const request = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_RUL,
  timeout: 1000,
  headers: {
    'x-token': Cookies.get('csrfToken'),
  },
});
