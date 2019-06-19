/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuantityController from '../quantityController/QuantityController';
import { deleteCartItem, updateCartItem } from '../../../store/actions/shoppingCart';
import './ShoppingCartItems.scss';

class ShoppingCartItem extends Component {
state = {}

removeCartItem = (payload) => {
  this.props.actions.deleteCartItem(payload);
}

updateCartItem = (quantity) => {
  this.props.actions.updateCartItem(this.props.cartItem.item_id, quantity);
}

render() {
  const { updatedCartItems, cartItem } = this.props;
  const item = updatedCartItems.find(elem => elem.item_id === cartItem.item_id);
  const quantity = item && item.quantity ? item.quantity : cartItem.quantity;
  const price = item && item.subtotal ? item.subtotal : cartItem.price;

  return (
    <div className="shopping-cart-product mb-3">
      <div className="cart-product">
        <div className="cart-product-image">
          <img src={`https://backendapi.turing.com/images/products/${cartItem.image}`} alt="Smiley face" />
        </div>
        <div className="cart-product-details">
          <span className="cart-item-name">{cartItem.name}</span>
          <div><span className="cart-remove-button" onClick={() => this.removeCartItem(cartItem.item_id)}>remove</span></div>
        </div>
      </div>
      <div className="cart-product-size text-center">
        <span>{cartItem.attributes}</span>
      </div>
      <div className="text-center cart-product-quantity">
        <QuantityController
          updateCartItem={this.updateCartItem}
          itemQuantity={quantity}
        />
      </div>
      <div className="cart-product-price text-right">
        <span>
          &#163;
          {price}
        </span>
      </div>
      <div />
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { deleteCartItem, updateCartItem },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  updatedCartItems: state.shoppingCart.updatedCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartItem);
