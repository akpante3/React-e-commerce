import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';

export const getCategories = id => dispatch => axiosIntance.get(`/categories/inDepartment/${id}`)
  .then((response) => {
    dispatch(actionResponse(ACTIONS.GET_CATEGORIES, response.data));
  }).catch(() => {
    toastr.error('An Error Occurred');
  });
