import ACTIONS from '../actions/actionType';

const initialState = {
  deliveryDetails: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_DELIVER_INFO:
      return {
        ...state,
        deliveryDetails: { ...action.payload },
      };
    default:
      return state;
  }
};
