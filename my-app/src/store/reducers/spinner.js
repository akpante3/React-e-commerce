import ACTIONS from '../actions/actionType';

const initialState = {
  spin: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SPIN:
      return {
        ...state,
        spin: action.payload,
      };
    default:
      return state;
  }
};
