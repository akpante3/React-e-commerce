/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import './ColorPick.scss';


class ColorPick extends Component {
  state = {
    selected: false,
  }

  handleClick = () => {
    this.setState(prevState => ({ selected: !prevState.selected }));
  }

  render() {
    const { colorStyle } = this.props;
    return (
      <div
        onClick={() => { this.handleClick(); }}
        onKeyDown={this.handleClick}
        style={colorStyle}
        className={`color-option ${this.state.selected ? 'selected-color' : null}`}
      />
    );
  }
}


export default ColorPick;
