import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import getProducts from './getProducts';
import getCategories from './getCategories';
import productReview from './productReview';
import shoppingCart from './shoppingCart';
import getDepartments from './getDepartments';
import custormerDeliveryDetails from './custormerDeliveryDetails';
import authUser from './authReducers/AuthUser';
import stripeForm from './stripeForm';
import spinner from './spinner';
import response from './responseMeassage';

const rootReducer = combineReducers({
  departments: getDepartments,
  products: getProducts,
  categories: getCategories,
  authUser,
  toastr: toastrReducer,
  productReview,
  shoppingCart,
  deliveryDetails: custormerDeliveryDetails,
  stripeForm,
  spinner,
  responseMessage: response,
});


export default rootReducer;
