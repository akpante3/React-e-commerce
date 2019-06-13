/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';


class Size extends Component {
  state = {
    selected: false,
  }

  handleClick = (size) => {
    const data = { ...this.state };
    this.setState({ selected: !data.selected });
    this.props.selectedAttributes(size, !data.selected);
  }

  render() {
    const { size } = this.props;
    return (
      <div onClick={() => { this.handleClick(size); }} className={this.state.selected ? 'selected-size' : 'unselected-size'}>
        <div className='size-option text-center'>{size}</div>
      </div>
    );
  }
}


export default Size;
