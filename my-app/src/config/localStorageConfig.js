import axiosInstance from './http';

export const getToken = () => localStorage.getItem('accessToken');

export const setToken = (token) => {
  // const token = getToken();
  axiosInstance.defaults.headers.common['USER-KEY'] = token;
  localStorage.setItem('accessToken', token);
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
  window.location.href = '/';
};
