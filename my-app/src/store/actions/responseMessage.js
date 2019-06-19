import actionResponse from './actionResponse';
import ACTIONS from './actionType';

export const errorResponse = () => (dispatch) => {
  dispatch(actionResponse(ACTIONS.CHECKOUT_ERROR));
};
