import { toastr } from 'react-redux-toastr';
import axiosIntance from '../../config/http';
import actionResponse from './actionResponse';
import ACTIONS from './actionType';

/** add to cart */
export const addToCart = productDetails => dispatch => axiosIntance.post('/shoppingcart/add',
  {
    cart_id: productDetails.cart_id,
    product_id: productDetails.product_id,
    attributes: productDetails.attributes,
  })
  .then((response) => {
    dispatch(actionResponse(ACTIONS.CART_DETAILS, response.data));
  }).catch(() => {
    toastr.error('server Error');
  });

/** get a shopping cart items by the cart id */
export const getShoppingCartItems = cartId => dispatch => axiosIntance.get(`/shoppingcart/${cartId}`)
  .then((response) => {
    dispatch(actionResponse(ACTIONS.CART_DETAILS, response.data));
  }).catch(() => {
    toastr.error('server Error');
  });

/** generate a cart id */
export const generateShoppingId = productDetails => dispatch => axiosIntance.get('/shoppingcart/generateUniqueId')
  .then((response) => {
    localStorage.setItem('cart_id', response.data.cart_id);
    if (productDetails) {
      const product = { ...productDetails };
      product.cart_id = response.data.cart_id;
      dispatch(addToCart(product));
    }
    dispatch(actionResponse(ACTIONS.CART_KEY, response.data.cart_id));
  }).catch(() => {
    toastr.error('server Error');
  });


/** delete from cart */
export const deleteCartItem = itemId => dispatch => axiosIntance.delete(`shoppingcart/removeProduct/${itemId}`)
  .then(() => {
    const cartId = localStorage.getItem('cart_id');
    dispatch(getShoppingCartItems(cartId));
  }).catch(() => {
    toastr.error('server Error');
  });

//   /shoppingcart/update/15077

/** update cart item */
export const updateCartItem = (itemId, quantity) => dispatch => axiosIntance.put(`/shoppingcart/update/${itemId}`,
  { item_id: itemId, quantity })
  .then((response) => {
    dispatch(actionResponse(ACTIONS.CART_UPDATE, response.data));
  }).catch(() => {
    toastr.error('server Error');
  });
