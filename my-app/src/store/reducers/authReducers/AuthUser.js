import ACTIONS from '../../actions/actionType';

const initialState = {
  authUser: {},
  authError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_USER:
      return {
        ...state,
        authUser: { ...action.payload },
      };
    case ACTIONS.AUTH_USER_ERROR:
      return {
        ...state,
        authError: { ...action.payload },
      };
    case ACTIONS.AUTH_USER_ERROR_ERASE:
      return {
        ...state,
        authError: {},
      };
    default:
      return state;
  }
};
