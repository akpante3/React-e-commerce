import ACTIONS from './actionType';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';

/** get all Departments
  */
export const getDepartments = () => dispatch => axiosIntance.get('/departments')
  .then((response) => {
    dispatch(actionResponse(ACTIONS.GET_DEPARTMENTS, response.data));
  });
