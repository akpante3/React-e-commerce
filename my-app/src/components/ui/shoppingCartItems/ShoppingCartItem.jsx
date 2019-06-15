/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuantityController from '../quantityController/QuantityController';
import { deleteCartItem, updateCartItem } from '../../../store/actions/ShoppingCart';
import './ShoppingCartItems.scss';
import { bindActionCreators } from '../../../../../../../../Library/Caches/typescript/3.1/node_modules/redux';

class ShoppingCartItem extends Component {
state = {

}

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
      <div className="cart-product col-md-12 row">
        <div className="cart-product-image col-md-3">
          <img src={`https://backendapi.turing.com/images/products/${cartItem.image}`} alt="Smiley face" />
        </div>
        <div className="cart-product-details col-md-7">
          <span className="cart-item-name">{cartItem.name}</span>
          <div><span className="cart-remove-button" onClick={() => this.removeCartItem(cartItem.item_id)}>remove</span></div>
        </div>
      </div>
      <div className="cart-product-size text-center">
        <span>{cartItem.attributes}</span>
      </div>
      <QuantityController
        updateCartItem={this.updateCartItem}
        itemQuantity={quantity}
      />
      <div className="cart-product-price text-right">
        <span>{price}</span>
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
