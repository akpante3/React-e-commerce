/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CSSTransition } from 'react-transition-group';
import './SingleProductPage.scss';
import SingleProductImage from '../../ui/singleProduct/singleProductImage/SingleProductImage';
import { getAProduct } from '../../../store/actions/getProducts';
import SingleProductInfo from '../../ui/singleProduct/singleProductInfo/SingleProductInfo';
import ReviewForm from '../../ui/forms/reviewForm/ReviewForm';
import Spinner from '../../ui/Spinner/Spinner';

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
          <CSSTransition
            in
            appear
            timeout={3000}
            classNames="fade"
          >
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
          </CSSTransition>
        )
        : <Spinner />
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
