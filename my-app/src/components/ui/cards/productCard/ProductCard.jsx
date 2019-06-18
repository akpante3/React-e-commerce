import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import AppButton from '../../buttons/AppButton/AppButton';
import './ProductCard.scss';


class ProductCard extends Component {
  state = {
    buttonVisibility: false,
  }

  handleMouseHover = () => {
    this.setState(prevState => ({
      buttonVisibility: !prevState.buttonVisibility,
    }));
  }

  buttonClickHandler = (payload) => {
    this.props.history.push(`/single-product/${payload}`);
  }

  render() {
    const { product } = this.props;
    return (
      <CSSTransition
        in
        appear
        timeout={2000}
        classNames="fade"
      >
        <div
          className="product-card"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <div className="image-wrapper">
            <span className={product.discounted_price !== '0.00' ? 'show-hot' : 'hide-hot'}>HOT</span>
            <img src={`https://backendapi.turing.com/images/products/${product.thumbnail}`} alt="Smiley face" />
          </div>
          <div className="text-center button-wrapper">
            <p className="mt-2">{product.name}</p>
            {this.state.buttonVisibility
              ? (
                <AppButton
                  title='Buy now'
                  value={product.product_id}
                  buttonClickHandler={this.buttonClickHandler}
                />
              ) : (
                <p className="mb-2 price">
                  &#163;
                  {product.price}
                </p>
              )}
          </div>
        </div>
      </CSSTransition>
    );
  }
}


export default connect()(withRouter(ProductCard));
