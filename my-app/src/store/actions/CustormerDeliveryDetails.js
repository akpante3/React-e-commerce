import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';
import { spinner } from './Spinner';


/** updateUserDetails to update an authenticated user details
 * params[userDetails]: updated details
  */
export const updateUserDetails = userDetails => dispatch => axiosIntance.put('/customers/address',
  {
    address_1: userDetails.address,
    city: userDetails.address,
    region: userDetails.region,
    postal_code: userDetails.postal_code,
    country: userDetails.country,
    shipping_region_id: userDetails.shipping_region_id,
  })
  .then((response) => {
    dispatch(spinner(false));
    dispatch(actionResponse(ACTIONS.USER_DELIVER_INFO, response.data));
  }).catch(() => {
    toastr.error('An Error Occurred', 'input all valid credentials and try again');
  });
