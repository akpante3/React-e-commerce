import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';
import { spinner } from './Spinner';

export const generateStripToken = () => (dispatch) => {
  dispatch(actionResponse(ACTIONS.GENERATE_STRIP_TOKEN));
};

export const stripeCharge = (token, orderId, price) => dispatch => axiosIntance.post('/stripe/charge', {
  stripeToken: token, amount: price, order_id: orderId, description: '1', currency: 'USD',
}).then((response) => {
  dispatch(spinner(false));
  dispatch(actionResponse(ACTIONS.STRIPE_CHARGE_GENERATED, response.data));
  localStorage.removeItem('cart_id');
}).catch(() => {
  toastr.error('An Error Occurred');
});
