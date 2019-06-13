import { combineReducers } from 'redux';
import GetProducts from './GetProducts';
import GetCategories from './GetCategories';
import GetDepartments from './GetDepartments';
// import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  departments: GetDepartments,
  products: GetProducts,
  categories: GetCategories,
});


export default rootReducer;
