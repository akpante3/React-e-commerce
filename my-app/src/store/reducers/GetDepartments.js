import ACTIONS from '../actions/actionType';

const initialState = {
  departments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DEPARTMENTS:
      return {
        ...state,
        departments: [...action.payload],
      };
    default:
      return state;
  }
};
