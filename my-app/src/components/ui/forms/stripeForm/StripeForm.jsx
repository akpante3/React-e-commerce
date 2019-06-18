import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import {
  CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe,
} from 'react-stripe-elements';
import './StripeForm.scss';


class CheckoutForm extends Component {
 state ={}

 componentDidUpdate() {
   if (this.props.generateStripeToken) {
     this.submit();
   }
 }

   submit= async () => {
     const { token } = await this.props.stripe.createToken();
     if (token) {
       this.props.stripeTokenInfo(token.id);
     } else {
       toastr.error('please fill crendentials correctly');
     }
   }

   render() {
     return (
       <div className="stripe-checkout-inputs">
         <div className="stripe-card-inputs">
           <div>
             <p>Card Owner*</p>
             <input name='name' placeholder='name' type="text" onChange={this.onChangeHandler} className="" />
           </div>
           <div>
             <p>Card Owner*</p>
             <CardNumberElement />
           </div>
         </div>
         <div className="stripe-card-inputs">
           <div className="stripe-card-inputs">
             <div>
               <p>Valid Thru*</p>
               <CardExpiryElement />
             </div>
             <div>
               <p>CVV/CVC*</p>
               <CardCVCElement />
             </div>
           </div>
           <span>
             The Card Verification Code, or CVC*,
             is an extra code printed on your debit or credit card.
           </span>
         </div>
       </div>
     );
   }
}

const mapStateToProps = state => ({
  generateStripeToken: state.stripeForm.generateStripeToken,
  deliveryDetails: state.deliveryDetails.deliveryDetails,
});

export default connect(mapStateToProps)(injectStripe(CheckoutForm));
