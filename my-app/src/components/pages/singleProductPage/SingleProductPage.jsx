/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './SingleProductPage.scss';
import SingleProductImage from '../../ui/singleProduct/singleProductImage/SingleProductImage';
import { getAProduct } from '../../../store/actions/GetProducts';
import SingleProductInfo from '../../ui/singleProduct/singleProductInfo/SingleProductInfo';
import ReviewForm from '../../ui/forms/reviewForm/ReviewForm';

class SingleProductPage extends Component {
state = {}

componentDidMount() {
  this.props.actions.getAProduct(this.props.match.params.productId);
}

render() {
  const { singleproduct } = this.props;
  const productImages = singleproduct && singleproduct.image
    ? [singleproduct.image, singleproduct.image_2, singleproduct.thumbnail]
    : [];

  return (
    <div className="single-page-wrapper">
      {
      singleproduct
        ? (
          <div className="single-page-display">
            <div className="single-page-product-display">
              <div>
                <SingleProductImage
                  images={productImages}
                />
              </div>
              <div>
                <SingleProductInfo />
              </div>
            </div>
            <div className="single-page-product-review mt-5">
              <div>
                <ReviewForm
                  productId={this.props.match.params.productId}
                />
              </div>
            </div>
          </div>
        )
        : <p>loading!</p>
    }
    </div>
  );
}
}

const mapStateToProps = state => ({
  singleproduct: state.products.singleProduct,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getAProduct },
    dispatch,
  ),
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
