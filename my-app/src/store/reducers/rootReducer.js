import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import GetProducts from './GetProducts';
import GetCategories from './GetCategories';
import GetDepartments from './GetDepartments';
import AuthUser from './authReducers/AuthUser';

const rootReducer = combineReducers({
  departments: GetDepartments,
  products: GetProducts,
  categories: GetCategories,
  authUser: AuthUser,
  toastr: toastrReducer,
});


export default rootReducer;
