/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generateShoppingId, getShoppingCartItems } from '../../../store/actions/ShoppingCart';
import ShoppingCartItem from './ShoppingCartItem';
import './ShoppingCartItems.scss';

class ShoppingCartItems extends Component {
  state = {
  }


  render() {
    const { shoppingCartItems } = this.props;
    console.log(shoppingCartItems, 'items');
    return (
      <div>
        <div className="shopping-cart-headers mb-4 pb-1">
          <div className="">Item</div>
          <div className="shopping-cart-header">Size</div>
          <div className="shopping-cart-header">Quantity</div>
          <div className="text-right">Price</div>
        </div>
        <div className="displayed-cart-items">
          { shoppingCartItems.length > 0 ? shoppingCartItems.map((item) => {
            return (<ShoppingCartItem cartItem={item} id={item.id} />);
          }) : null }
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { generateShoppingId, getShoppingCartItems },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartItems);
