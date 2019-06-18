import actionResponse from '../actionResponse';
import ACTIONS from '../actionType';

/** get product in category
 * params[userDetials]: paginaton number
  */
export const authUser = user => (dispatch) => {
  dispatch(actionResponse(ACTIONS.AUTH_USER, user));
};

export const eraseAuthError = () => (dispatch) => {
  dispatch(actionResponse(ACTIONS.AUTH_USER_ERROR_ERASE, {}));
};
