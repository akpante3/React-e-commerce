import jwtDecode from 'jwt-decode';
import { getToken, removeToken } from '../config/localStorageConfig';
import { authUser } from '../store/actions/authActions/AuthUser';

export default (store) => {
  const token = getToken('accessToken');
  if (token) {
    const decoded = jwtDecode(token);
    const isExpired = (decoded.exp < (Date.now() / 1000));
    if (isExpired) {
      removeToken();
    } else {
      store.dispatch(authUser(decoded));
    }
  }
};
