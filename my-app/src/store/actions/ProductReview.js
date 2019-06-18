import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';

export const getProductReviews = productId => dispatch => axiosIntance.get(`/products/${productId}/reviews`)
  .then((response) => {
    dispatch(actionResponse(ACTIONS.GET_PRODUCT_REVIEWS, response.data));
  }).catch((err) => {
    console.log(err);
  });
