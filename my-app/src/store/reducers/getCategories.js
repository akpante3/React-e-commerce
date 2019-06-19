import ACTIONS from '../actions/actionType';

const initialState = {
  count: null,
  categories: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    default:
      return state;
  }
};
