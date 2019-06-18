import ACTIONS from '../actions/actionType';

const initialState = {
  reviews: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCT_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload],
      };
    default:
      return state;
  }
};
