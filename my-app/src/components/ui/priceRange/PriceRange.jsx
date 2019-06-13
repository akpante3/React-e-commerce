/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './PriceRange.scss';

class Range extends Component {
  state = {
    value: { min: 2, max: 10 },
  }

  render() {
    return (
      <div className="input-range">
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}

export default Range;
