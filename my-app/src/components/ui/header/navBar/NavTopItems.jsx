/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './NavBar.scss';
// import { getProductsByDepartment } from '../../../../actions/GetProducts';
import './NavTopItems.scss';
import { removeToken } from '../../../../config/localStorageConfig';


/**
 * @param {boolean} isAuthenticated should be a boolean
 */
class NavTopItems extends Component {
  state = {

  }

  handleAuthClick = (payload) => {
    this.props.toggleAuthModal(payload);
  };

  handleCartClick = () => {
    this.props.toggleCartModal();
  };

  logOut = () => {
    removeToken();
  };

  render() {
    let yourBag = 0;
    const { authUser, shoppingCartItems } = this.props;
    if (shoppingCartItems.length) {
      shoppingCartItems.map((order) => {
        yourBag += parseInt(order.subtotal, 10);
        return true;
      });
    }
    return (
      <div className="nav-top-items">
        <div className="nav-auth-section">
          { !authUser.customer_id
            ? (
              <div>
                 hi
                <span onClick={() => this.handleAuthClick('signIn')}> Sign in </span>
                 or
                <span onClick={() => this.handleAuthClick('signUp')}>  Register </span>
              </div>
            )
            : (
              <div>
                 hi!
                {'  '}
                {authUser.name}
              </div>
            )
      }
        </div>
        <div className="your-bag">
            Your bag:
          {' '}
          <span>
            &#163;
            { yourBag }
          </span>
        </div>
        <div className="text-right log-out">
          { authUser.customer_id
            ? <span onClick={() => this.logOut('signIn')}> logOut </span> : null
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
  shoppingCartItems: state.shoppingCart.cartItems,
});

export default connect(mapStateToProps)(NavTopItems);
