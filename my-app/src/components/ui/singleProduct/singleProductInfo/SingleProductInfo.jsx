/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import StarRating from '../../starRatings/StarRatings';
import { generateShoppingId, addToCart } from '../../../../store/actions/ShoppingCart';
import ColorsPick from '../../colorsPick/ColorsPick/ColorsPick';
import ProductSizes from '../../productSizes/ProductSizes';
import QuantityController from '../../quantityController/QuantityController';
import AppButtonLarge from '../../buttons/AppButton/AppButtonLarge';
import './SingleProductInfo.scss';

class SingleProductInfo extends Component {
  state = {
    attributes: 'M',
  }

  addToCart = () => {
    const { singleproduct } = this.props;
    const cartId = localStorage.getItem('cart_id');
    const productDetials = {
      cart_id: cartId,
      product_id: singleproduct.product_id,
      attributes: this.state.attributes,
    };
    if (!this.props.authUser.customer_id) {
      toastr.error('An Error Occurred', 'you have to be a Registered user to add an item to cart');
      return false;
    }
    if (!cartId) {
      this.props.actions.generateShoppingId(productDetials);
    } else {
      this.props.actions.addToCart(productDetials);
    }
    return true;
  }

  updateAttributes = (list) => {
    this.setState({ attributes: list.join(' ') });
  }

  render() {
    const { singleproduct, productReview } = this.props;
    const ratingCount = productReview.length && productReview[1].rating
      ? productReview[1].rating : 1;
    return (
      <div>
        {
        singleproduct.name && ratingCount
          ? (
            <div className="single-poduct-info">
              <div>
                <StarRating
                  count={ratingCount}
                />
              </div>
              <div className="mt-3">
                <h3>
                  {singleproduct.name}
                </h3>
              </div>
              <div className='mt-4 single-poroduct-prize'>
                <span>{singleproduct.price}</span>
                <strike>{singleproduct.discounted_price}</strike>
              </div>
              <div>
                <div className='mt-3 single-product-color-pick'>
                  <p>Color</p>
                  <ColorsPick />
                </div>
              </div>
              <div className='mt-4'>
                <p>Size</p>
                <ProductSizes
                  updateAttributes={this.updateAttributes}
                />
              </div>
              <div className='mt-4 quantity'>
                <p>Quantity</p>
                <QuantityController />
              </div>
              <br />
              <div className="mt-3">
                <AppButtonLarge
                  title='Add to cart'
                  buttonClickHandler={this.addToCart}
                />
              </div>
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleproduct: state.products.singleProduct,
  productReview: state.productReview.reviews,
  authUser: state.authUser.authUser,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { generateShoppingId, addToCart },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductInfo);
