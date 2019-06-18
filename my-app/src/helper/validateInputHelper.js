/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
import { toastr } from 'react-redux-toastr';

export const validateFields = async (deliverydata) => {
  for (const key in deliverydata) {
    if (deliverydata[key] === '' || deliverydata[key] === null) {
      toastr.error('An Error Occurred', 'input all valid credentials and try again');
      return false;
    }
  }
  if (isNaN(deliverydata.shipping_region_id)) {
    toastr.error('An Error Occurred', 'input all valid credentials, shipping Region should be an integer');
    return false;
  }
  return true;
};
