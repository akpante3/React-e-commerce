import ACTIONS from '../actions/actionType';

const initialState = {
  cartId: '',
  cartItems: [],
  updatedCartItems: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CART_KEY:
      return {
        ...state,
        cartId: action.payload,
      };
    case ACTIONS.CART_DETAILS:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case ACTIONS.CART_ITEMS:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case ACTIONS.CART_UPDATE:
      return {
        ...state,
        updatedCartItems: [...action.payload],
      };


    default:
      return state;
  }
};
