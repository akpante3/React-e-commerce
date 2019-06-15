import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import GetProducts from './GetProducts';
import GetCategories from './GetCategories';
import ProductReview from './ProductReview';
import ShoppingCart from './ShoppingCart';
import GetDepartments from './GetDepartments';
import AuthUser from './authReducers/AuthUser';

const rootReducer = combineReducers({
  departments: GetDepartments,
  products: GetProducts,
  categories: GetCategories,
  authUser: AuthUser,
  toastr: toastrReducer,
  productReview: ProductReview,
  shoppingCart: ShoppingCart,
});


export default rootReducer;
