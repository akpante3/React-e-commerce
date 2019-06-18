/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import TextInput from '../../textInput/TextInput';
import './DeliveryForm.scss';


class DeliveryForm extends Component {
state = {
  address: '',
  city: '',
  region: '',
  country: '',
  postal_code: '',
  shipping_region_id: '',
}

onClickHandler = () => this.state.data

onHandleCheck = (e) => {
  localStorage.setItem('shipping options', e.target.name);
}

textUpdate = (data) => {
  this.setState({ [data.name]: data.value });
  this.props.updateDeliverData(this.state);
}

render() {
  const { label } = this.props;
  return (
    <div className="delivery-form">
      <div className="delivery-form-inputs text-center">
        { label }
        <TextInput
          label="address*"
          textUpdate={this.textUpdate}
          name="address"
        />
        <TextInput
          label="city*"
          textUpdate={this.textUpdate}
          name="city"
        />
        <TextInput
          label="region*"
          name="region"
          textUpdate={this.textUpdate}
        />
        <TextInput label="country*" name="country" textUpdate={this.textUpdate} />
        <TextInput label="Postal Code*" name="postal_code" textUpdate={this.textUpdate} />
        <TextInput label="Shipping Region*" name="shipping_region_id" textUpdate={this.textUpdate} />
      </div>
      <br />
      <div className="delivery-form-location">
        <p>Country:</p>
        <input type="checkbox" name="delivery" value="information" />
          my billing information is same as my delivery information
      </div>
      <div className="delivery-form-delivery-options">
        <p>Delivery options</p>
        <div className="row col-md-12 delivery-form-shipping">
          <div className="col-md-6">
            <input type="radio" name="Standard shipping" value="male" onChange={this.onHandleCheck} />
              Standard shipping
          </div>
          {' '}
          <div className="col-md-6">
            <input type="radio" name="Express shipping" value="male" onChange={this.onHandleCheck} />
              Express shipping
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default DeliveryForm;
