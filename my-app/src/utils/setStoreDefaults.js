import jwtDecode from 'jwt-decode';
import { getToken, removeToken } from '../config/localStorageConfig';
import { authUser } from '../store/actions/authActions/AuthUser';
import { getShoppingCartItems } from '../store/actions/ShoppingCart';


export default (store) => {
  const token = getToken('accessToken');
  const cartId = localStorage.getItem('cart_id');
  if (JSON.parse(!token)) {
    return false;
  }
  if (cartId) {
    store.dispatch(getShoppingCartItems(cartId));
  }
  const decoded = jwtDecode(token);
  const isExpired = (decoded.exp < (Date.now() / 1000));
  if (isExpired) {
    removeToken();
  } else {
    store.dispatch(authUser(decoded));
  }
  return true;
};
