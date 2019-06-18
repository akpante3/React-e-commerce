import ACTIONS from '../actions/actionType';

const initialState = {
  generateStripeToken: false,
  stripeCharge: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GENERATE_STRIP_TOKEN:
      return {
        ...state,
        generateStripeToken: true,
      };
    case ACTIONS.STRIPE_CHARGE_GENERATED:
      return {
        ...state,
        stripeCharge: true,
      };
    default:
      return state;
  }
};
