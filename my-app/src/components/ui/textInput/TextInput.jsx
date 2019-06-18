/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import './TextInput.scss';

class TextInput extends Component {
state = {

}

onChangeHandler = (e) => {
  this.props.textUpdate(e.target);
}

render() {
  const { label, placeholder, name } = this.props;
  return (
    <div className="text-input">
      <p className="text-left">{ label }</p>
      <input name={name} placeholder={placeholder} type="text" onChange={this.onChangeHandler} className="form-control" />
    </div>
  );
}
}

export default TextInput;
