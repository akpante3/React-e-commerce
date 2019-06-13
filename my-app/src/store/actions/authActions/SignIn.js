import axiosIntance from '../../../config/http';
import actionResponse from '../actionResponse';
import ACTIONS from '../actionType';
import { setToken } from '../../../config/localStorageConfig';

/** get product in category
 * params[userDetials]: paginaton number
  */
export const signInUser = userDetials => dispatch => axiosIntance.post('/customers/login',
  { email: userDetials.email, password: userDetials.password })
  .then((response) => {
    setToken(response.data.accessToken);
    dispatch(actionResponse(ACTIONS.AUTH_USER, response.data.customer));
  }).catch((err) => {
    if (err.response && err.response.data.error) {
      const { field, message } = err.response.data.error;
      dispatch(actionResponse(ACTIONS.AUTH_USER_ERROR, { field, message }));
    } else {
      dispatch(actionResponse(ACTIONS.AUTH_USER_ERROR, { message: 'An error occured' }));
    }
  });
