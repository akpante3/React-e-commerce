import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../../config/http';
import actionResponse from '../actionResponse';
import ACTIONS from '../actionType';
import { setToken } from '../../../config/localStorageConfig';

/** get product in category
 * params[userDetials]: paginaton number
  */
export const signUpUser = userDetials => dispatch => axiosIntance.post('/customers',
  { email: userDetials.email, password: userDetials.password, name: userDetials.name })
  .then((response) => {
    setToken(response.data.accessToken);
    dispatch(actionResponse(ACTIONS.AUTH_USER, response.data.customer));
  }).catch((err) => {
    if (err.response && err.response.data.error) {
      const { field, message } = err.response.data.error;
      toastr.error(`ERROR Field: ${field}`, message);
      // dispatch(actionResponse(ACTIONS.AUTH_USER_ERROR, { field, message }));
    } else {
      dispatch(actionResponse(ACTIONS.AUTH_USER_ERROR, { message: 'An error occured' }));
    }
  });
