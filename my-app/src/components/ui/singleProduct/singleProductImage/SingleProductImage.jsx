/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './SingleProductImage.scss';

class SingleProductImage extends Component {
  state = {
    imgNum: 2,
    images: [...this.props.images],
  }

  onHandleClick = (index) => {
    this.setState({ imgNum: index });
  }

  render() {
    const { images, imgNum } = this.state;
    return (
      <div>
        <div className="img-big text-center">
          <img src={`https://backendapi.turing.com/images/products/${images[imgNum]}`} alt="Smiley face" />
        </div>
        <div className="mt-3 text-center">
          {
          images.map((image, index) => (
            <div className={`img-small ${imgNum === index ? 'selcted-product-img' : null}`} onClick={() => this.onHandleClick(index)}>
              <img src={`https://backendapi.turing.com/images/products/${images[index]}`} alt="Smiley face" />
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

export default SingleProductImage;
