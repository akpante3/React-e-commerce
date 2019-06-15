/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './ShoppingBag.scss';

const ShoppingBag = ({ position, authUser, shoppingCartItems }) => (authUser.customer_id ? (
  <div className="text-right shopping-bag-section">
    <div className={position === 'top' ? 'top-nav-count' : 'bottom-nav-count'}>
      <div className="cart-count text-center">
        <span>{ shoppingCartItems.length ? shoppingCartItems.length : 0 }</span>
      </div>
      <Link>
        <span className="shopping-bag">
          <FontAwesomeIcon icon={faShoppingBag} />
        </span>
      </Link>
    </div>
  </div>
) : null
);

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
  shoppingCartItems: state.shoppingCart.cartItems,
});

export default connect(mapStateToProps)(ShoppingBag);
