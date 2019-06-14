/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import './QuantityController.scss';

class QuantityController extends Component {
  state = {
    quantityCount: 0,
  }

  componentDidMount() {
    if (this.props.itemQuantity) {
      this.setState({ quantityCount: this.props.itemQuantity });
    }
  }

  handleQuantityCount = (payload) => {
    let data;
    if (payload === 'next') {
      data = this.state.quantityCount + 1;
      this.setState({ quantityCount: data });
    } else if (payload !== 'next' && this.state.quantityCount !== 0) {
      data = this.state.quantityCount - 1;
      this.setState({ quantityCount: data });
    }
    if (this.props.updateCartItem) {
      this.props.updateCartItem(data);
    }
  }

  render() {
    return (
      <div className="cart-product-quantity row">
        <div className="product-quantity-controller text-center" onClick={() => this.handleQuantityCount('prev')}> - </div>
        <div className="product-quantity text-center">{ this.props.itemQuantity || this.state.quantityCount}</div>
        <div className="product-quantity-controller text-center" onClick={() => { this.handleQuantityCount('next'); }}> + </div>
      </div>
    );
  }
}


export default QuantityController;
