import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import GetProducts from './GetProducts';
import GetCategories from './GetCategories';
import ProductReview from './ProductReview';
import ShoppingCart from './ShoppingCart';
import GetDepartments from './GetDepartments';
import CustormerDeliveryDetails from './CustormerDeliveryDetails';
import AuthUser from './authReducers/AuthUser';
import StripeForm from './StripeForm';
import Spinner from './Spinner';

const rootReducer = combineReducers({
  departments: GetDepartments,
  products: GetProducts,
  categories: GetCategories,
  authUser: AuthUser,
  toastr: toastrReducer,
  productReview: ProductReview,
  shoppingCart: ShoppingCart,
  deliveryDetails: CustormerDeliveryDetails,
  stripeForm: StripeForm,
  spinner: Spinner,
});


export default rootReducer;
