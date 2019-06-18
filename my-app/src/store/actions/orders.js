import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import { stripeCharge } from './StripeForm';
import { getToken, setToken } from '../../config/localStorageConfig';

const cartId = localStorage.getItem('cart_id');

/** create an order
 * params[token]: Stripe token
 * params[grandTotal]: total price of chart item
  */
export const createOrder = (stripeToken, grandTotal) => dispatch => axiosIntance.post('/orders', { cart_id: cartId, shipping_id: '5', tax_id: '1' })
  .then((response) => {
    const authToken = getToken();
    setToken(authToken);
    dispatch(stripeCharge(stripeToken, response.data.orderId, grandTotal));
  }).catch(() => {
    toastr.error('An Error Occurred', 'input all valid credentials and try again');
  });
