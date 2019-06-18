import actionResponse from './actionResponse';
import ACTIONS from './actionType';

export const spinner = payload => (dispatch) => {
  dispatch(actionResponse(ACTIONS.SPIN, payload));
};
