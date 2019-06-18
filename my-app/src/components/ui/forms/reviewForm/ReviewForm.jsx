/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ReviewForm.scss';
import StarRating from '../../starRatings/StarRatings';
import AppButton from '../../buttons/AppButton/AppButton';
import { getProductReviews } from '../../../../store/actions/ProductReview';

class ReviewForm extends Component {
  state = {
    showReviews: false,
  }

  componentDidMount() {
    this.props.actions.getProductReviews(this.props.productId);
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleReview = () => {
    this.setState(prevState => ({
      showReviews: !prevState.showReviews,
    }));
  }

  render() {
    const { productReview } = this.props;
    const { showReviews } = this.state;
    const reviews = productReview ? [...productReview] : null;
    return (
      <div className="review-form-section">
        <div className="users-review">
          <h5>Product Review</h5>
          <div className="review-button mb-5" onKeyDown={this.toggleReview} onClick={() => this.toggleReview()}>{ showReviews ? 'Hide Reviews ' : 'Show Reviews' }</div>
          <br />
          { showReviews
            ? reviews.map(review => (
              <div className="mb-4">
                <div className="review-input-layout">
                  <span>
                    <StarRating
                      count={review.rating}
                    />
                  </span>
                  <p>{review.review}</p>
                </div>
                <div>
                  <span>
                    <p>{review.name}</p>
                    <span>{review.created_on}</span>
                  </span>
                  <div>icons </div>
                </div>
              </div>
            )) : null
          }
        </div>
        <br />
        <div className='mt-3'>
          <h5>Add a review</h5>
          <br />
          <div className="review-nickname review-input-layout mt-3">
            <span>Choose a nickname</span>
            <input name="userNickName" type="text" onChange={this.onChangeHandler} className="form-control" />
          </div>
          <div className="review-product review-input-layout mt-3">
            <span>Your review</span>
            <textarea name="userReview" type="text" onChange={this.onChangeHandler} className="form-control" />
          </div>
          <div className="review-product review-input-layout mt-3">
            <span>Overall rating</span>
            <StarRating
              value="user-review"
            />
          </div>
          <div className="review-product review-input-layout mt-3">
            <div />
            <div>
              <AppButton
                buttonClickHandler={this.submitReviewForm}
                title="submit"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productReview: state.productReview.reviews,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getProductReviews },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
