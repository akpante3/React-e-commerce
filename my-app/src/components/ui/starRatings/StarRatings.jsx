
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './StarRatings.scss';

// ** [StarRating]: to rating and receive ratings for the application products */
class StarRating extends Component {
  state = {
    count: this.props.count,
  }

  /** make stars clickable when the user is to add ratings */
  ratingsHandler = payload => (this.props.value === 'user-review' ? this.setState({ count: payload }) : null);

  render() {
    const { count } = this.state;
    return (
      <div>
        <div className="user-reviewer-ratings">
          <span
            className={count >= 1 ? 'star-rating-glow' : 'star-rating-normal'}
            onClick={() => this.ratingsHandler(1)}
            onKeyDown={() => this.ratingsHandler(1)}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span
            className={count >= 2 ? 'star-rating-glow' : 'star-rating-normal'}
            onClick={() => this.ratingsHandler(2)}
            onKeyDown={() => this.ratingsHandler(2)}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span
            className={count >= 3 ? 'star-rating-glow' : 'star-rating-normal'}
            onClick={() => this.ratingsHandler(3)}
            onKeyDown={() => this.ratingsHandler(3)}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span
            className={count >= 4 ? 'star-rating-glow' : 'star-rating-normal'}
            onClick={() => this.ratingsHandler(4)}
            onKeyDown={() => this.ratingsHandler(4)}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span
            className={count >= 5 ? 'star-rating-glow' : 'star-rating-normal'}
            onClick={() => this.ratingsHandler(5)}
            onKeyDown={() => this.ratingsHandler(5)}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>
    );
  }
}

export default connect()(StarRating);
