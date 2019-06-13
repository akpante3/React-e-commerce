/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './NavBar.scss';
import ShoppingBag from '../../ShoppingBag/ShoppingBag';
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
    const { authUser } = this.props;
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
                {' '}
                {authUser.name}
                {' '}
                <span onClick={() => this.logOut('signIn')}> logOut </span>
              </div>
            )
      }
        </div>
        <div className="mt-1">
          flag $
        </div>
        <div
          className="shopping-cart pr-3"
          onClick={() => this.handleCartClick()}
        >
          <ShoppingBag position='top' />
        </div>
        <div className="mt-1">
          <span> Your bag:</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
});

export default connect(mapStateToProps)(NavTopItems);
