import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { getShoppingCartItems } from '../../../../store/actions/ShoppingCart';
import 'react-input-range/lib/css/index.css';
import './ConfirmationForm.scss';
import Spinner from '../../Spinner/Spinner';


class DeliveryForm extends Component {
  state = {
    // orders: [
    //   ...this.props.shoppingCartItems,
    // ],
  }

  componentDidMount() {
    const cartId = localStorage.getItem('cart_id');
    if (!cartId) {
      return false;
    }
    return this.props.actions.getShoppingCartItems(cartId);
  }

  render() {
    let grandtotal = 40;
    const { deliveryDetails, shoppingCartItems } = this.props;
    const orderList = shoppingCartItems.map((order) => {
      grandtotal += parseInt(order.subtotal, 10);
      return (
        <div className='order-summary order-list'>
          <div>{order.name}</div>
          <div className="text-center">{order.quantity}</div>
          <div className="text-center subtotal">
            &#163;
            {order.subtotal}
          </div>
        </div>
      );
    });

    const shippingOption = localStorage.getItem('shipping options');
    if (shoppingCartItems && shoppingCartItems.length === 0) {
      this.props.history.push('/');
      toastr.error('Shopping cart is empty', 'Add to Cart to perform Checkout');
    }

    return (deliveryDetails.address_1 && shoppingCartItems
      ? (
        <div className="confirmation-form">
          <div className="confirmation-form-detail">
            <div className>
              <p>Order summary</p>
              <div className=''>
                <div className='order-summary order-header'>
                  <div>Item</div>
                  <div className="text-center">Qty</div>
                  <div className="text-center">Price</div>
                </div>
                <div className='order-lists'>
                  {orderList}
                </div>
              </div>
            </div>
            <div>
              <p>Delivery</p>
              <div className="delivery-details">
                <div>
                  <div className="delivery-details-header">Address</div>
                  <span>{deliveryDetails.address_1}</span>
                </div>
                <div>
                  <div className="delivery-details-header">Delivery option</div>
                  <span>{shippingOption || 'Standard shipping'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmation-form-footer">
            <div />
            <div className="summary-footer">
              <p>
              Subtotal
              </p>
              &#163;
              { grandtotal - 40 }
            </div>
            <div className="summary-footer">
              <p>
              Shipping
              </p>
              &#163;40
            </div>
            <div className="summary-footer">
              <p>
              Grandtotal
              </p>
              &#163;
              { grandtotal }
            </div>
          </div>
        </div>
      ) : <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
  shoppingCartItems: state.shoppingCart.cartItems,
  deliveryDetails: state.deliveryDetails.deliveryDetails,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getShoppingCartItems },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeliveryForm));
