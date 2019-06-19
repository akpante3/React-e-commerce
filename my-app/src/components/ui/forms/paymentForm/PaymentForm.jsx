import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken, getToken } from '../../../../config/localStorageConfig';
import CheckoutForm from '../stripeForm/StripeForm';
import { createOrder } from '../../../../store/actions/orders';
import { spinner } from '../../../../store/actions/spinner';
import './PaymentForm.scss';


class PaymentForm extends Component {
  state = {
  }


  stripeTokenInfo = async (token) => {
    let grandtotal = 40;
    await this.props.shoppingCartItems.map((order) => {
      grandtotal += parseInt(order.subtotal, 10);
      return grandtotal;
    });
    const authToken = getToken();
    setToken(authToken);
    this.props.actions.createOrder(token, grandtotal);
    this.props.actions.spinner(true);
  }

  render() {
    return (
      <div>
        <div className='payment-form-image-headers'>
          <div className="payment-image-wrapper text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCuuixqLoSdP8UsvLT_jO0uMq5jnouZIvETavpTE3UxzDimTl" alt="Smiley face" />
            <div className="mt-2">
              <input type="radio" name="gender" value="male" />
              <span className="mt-3">Pay $40</span>
            </div>
          </div>
          <div className="payment-image-wrapper text-center">
            <img src="https://www.braintreepayments.com/images/logos/payment-methods/paypal-logo-block-7a37dfd0.svg" alt="Smiley face" />
            <div className="mt-2">
              <input type="radio" name="gender" value="male" />
              <span className="mt-3">Pay $50</span>
            </div>
          </div>
        </div>
        <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
          <Elements>
            <CheckoutForm
              stripeTokenInfo={this.stripeTokenInfo}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { createOrder, spinner },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
