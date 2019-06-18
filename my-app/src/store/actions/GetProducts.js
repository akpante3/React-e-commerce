import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';

/** gets all avaliable products
 * params[page]: paginaton number
  */
export const getAllProducts = page => dispatch => axiosIntance.get(`/products?page=${page}&limit=10`)
  .then((response) => {
    dispatch(actionResponse(ACTIONS.GET_PRODUCTS, response.data));
  }).catch(() => {
    toastr.error('An Error Occurred', 'input all valid credentials and try again');
  });

/** get product in department
 * params[page]: paginaton number
 * params[id]: department_id
  */
export const getProductsByDepartment = (page, id) => dispatch => axiosIntance.get(`/products/inDepartment/${id}?page=${page}&limit=10`)
  .then((response) => {
    const responseData = { ...response.data, id };
    dispatch(actionResponse(ACTIONS.GET_DEPARTMENTS_PRODUCTS, responseData));
  }).catch(() => {
    toastr.error('An Error Occurred');
  });

/** get product in category
 * params[page]: paginaton number
 * params[id]: category_id
  */
export const getProductsByCatergory = (page, id) => dispatch => axiosIntance.get(`/products/inCategory/${id}?page=${page}&limit=10`)
  .then((response) => {
    const responseData = { ...response.data, id };
    dispatch(actionResponse(ACTIONS.GET_CATEGORY_PRODUCTS, responseData));
  }).catch(() => {
    toastr.error('An Error Occurred');
  });

/** get a product
 * params[id]: category_id
  */
export const getAProduct = id => dispatch => axiosIntance.get(`/products/${id}`)
  .then((response) => {
    const responseData = { ...response.data, id };
    dispatch(actionResponse(ACTIONS.GET_A_PRODUCTS, responseData));
  }).catch(() => {
    toastr.error('An Error Occurred');
  });

/** search a product
 * params[id]: category_id
  */
export const searchProduct = (page, word) => dispatch => axiosIntance.get(`/products/search?query_string=${word}&all_words=on&page=1&limit=10`)
  .then((response) => {
    dispatch(actionResponse(ACTIONS.SEARCH_PRODUCT, response.data));
  }).catch(() => {
    toastr.error('An Error Occurred');
  });
