/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import AppButton from '../../ui/buttons/AppButton/AppButton';
import DeliveryForm from '../../ui/forms/deliveryForm/DeliveryForm';
import ComfirmationForm from '../../ui/forms/confirmationForm/ConfirmationForm';
import PaymentForm from '../../ui/forms/paymentForm/PaymentForm';
import MultiStep from '../../ui/multiStep/MultiStep';
import { setToken, getToken } from '../../../config/localStorageConfig';
import { updateUserDetails } from '../../../store/actions/CustormerDeliveryDetails';
import { generateStripToken } from '../../../store/actions/StripeForm';
import { spinner } from '../../../store/actions/Spinner';
import { validateFields } from '../../../helper/validateInputHelper';
import Spinner from '../../ui/Spinner/Spinner';
import SuccessPage from '../../ui/forms/successPage/succesPage';

import './CheckoutPage.scss';


class CheckoutPage extends Component {
  state = {
    pageCount: 0,
    deliverydata: {},
  };


   submitForm = async () => {
     const token = getToken();
     setToken(token);
     if (this.state.pageCount === 0) {
       const valid = await validateFields(this.state.deliverydata);
       if (valid) {
         this.props.actions.spinner(true);
         this.props.actions.updateUserDetails(this.state.deliverydata);
         return true;
       }
       return false;
     } if (this.state.pageCount === 2) {
       this.props.actions.generateStripToken();
       return true;
     }
     return true;
   }

  updateDeliverData = (data) => {
    this.setState({ deliverydata: { ...data } });
  }

  buttonClickHandler = async (value) => {
    if (value === 'next-page' && this.state.pageCount !== 3) {
      const validForm = await this.submitForm();
      if (this.state.pageCount === 2) return;
      if (validForm) {
        this.setState(prevState => ({
          pageCount: prevState.pageCount + 1,
        }));
      }
    } else if (value === 'previous-page' && this.state.pageCount !== 0) {
      this.setState(prevState => ({
        pageCount: prevState.pageCount - 1,
      }));
    }
  }

  render() {
    const { spin, stripeCharge } = this.props;

    const pages = [
      <DeliveryForm
        updateDeliverData={this.updateDeliverData}
      />,
      <ComfirmationForm />,
      <PaymentForm />,
      <SuccessPage />,
    ];

    const multiCount = stripeCharge ? 3 : this.state.pageCount;

    return (
      <div>
        { spin
          ? <Spinner />
          : (
            <CSSTransition
              in
              appear
              timeout={3000}
              classNames="fade"
            >
              <div className="checkout-page-wrapper">
                <div className="checkout-page">
                  <div className="checkout-page-forms">
                    <h4>Checkout</h4>
                    <br />
                    <MultiStep step={multiCount} />
                    <br />
                    <br />
                    <br />
                    {
                    stripeCharge ? pages[3] : pages[this.state.pageCount]
                  }
                  </div>
                  <br />
                  <br />
                  {
                    stripeCharge ? null
                      : (
                        <div className="check-out-footer row col-md-12">
                          <div className="">
                            <AppButton
                              title="Back"
                              value="previous-page"
                              buttonClickHandler={this.buttonClickHandler}
                            />
                          </div>
                          <div className="text-right">
                            <AppButton
                              title="Next"
                              color="white"
                              value="next-page"
                              buttonClickHandler={this.buttonClickHandler}
                            />
                          </div>
                        </div>
                      )
                  }
                </div>
              </div>
            </CSSTransition>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stripeCharge: state.stripeForm.stripeCharge,
  spin: state.spinner.spin,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { updateUserDetails, generateStripToken, spinner },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutPage));
