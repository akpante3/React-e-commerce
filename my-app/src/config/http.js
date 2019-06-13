import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backendapi.turing.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});


export default axiosInstance;
