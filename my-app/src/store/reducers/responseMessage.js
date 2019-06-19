import ACTIONS from '../actions/actionType';

const initialState = {
  error: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHECKOUT_ERROR:
      return {
        ...state,
        error: !state.error,
      };
    default:
      return state;
  }
};
