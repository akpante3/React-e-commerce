/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropsTypes from 'prop-types';
import './ShoppingCartModal.scss';
import AppButton from '../../buttons/AppButton/AppButton';
import { generateShoppingId, getShoppingCartItems } from '../../../../store/actions/shoppingCart';


class ShoppingCartModal extends Component {
  state = {}

  componentDidMount() {
    const cartId = localStorage.getItem('cart_id');
    if (!cartId) {
      this.props.actions.generateShoppingId();
    } else {
      this.props.actions.getShoppingCartItems(cartId);
    }
  }

  handleCartClick = () => {
    this.props.toggleCartModal();
  };

  buttonClickHandler = (value) => {
    if (value === 'Back to shop') {
      this.props.history.push('/');
      this.props.toggleCartModal();
    } else if (this.props.shoppingCartItems.length !== 0) {
      this.props.history.push('/checkout');
      this.props.toggleCartModal();
    } else {
      toastr.error('An error occur', 'cart is empty');
    }
  };

  render() {
    const { children } = this.props;
    return (
      <CSSTransition
        in
        appear
        timeout={2000}
        classNames="enter"
      >
        <Fragment>
          <div className="product-modal">
            <div className="product-modal-content">
              <div className="close-modal">
                <div
                  className="text-right close-modal-icon"
                  onClick={() => this.handleCartClick()}
                >
            &times;
                </div>
              </div>
              <div className="product-modal-children">
                {children}
              </div>
              <div className="row bottom-section">
                <div className="col">
                  <AppButton
                    title='Back to shop'
                    value='Back to shop'
                    color='white'
                    buttonClickHandler={this.buttonClickHandler}
                  />
                </div>
                <div className="checkout">
                  <AppButton
                    title="checkout"
                    value="checkout"
                    buttonClickHandler={this.buttonClickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div />
        </Fragment>
      </CSSTransition>
    );
  }
}

ShoppingCartModal.propTypes = {
  children: PropsTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { generateShoppingId, getShoppingCartItems },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShoppingCartModal));
