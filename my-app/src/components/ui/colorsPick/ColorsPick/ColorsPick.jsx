/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import ColorPick from '../ColorPick/ColorPick';
import './ColorsPick.scss';

class productFilter extends Component {
  state = {
    colors: [
      { id: 1, color: '#2E2E2E' },
      { id: 2, color: '#F62F5E' },
      { id: 3, color: '#6EB2FB' },
      { id: 4, color: '#F1AD3D' },
      { id: 5, color: '#F7F7F7' },
      { id: 6, color: '#00D3CA' },
      { id: 7, color: '#EFFC90' },
    ],
  }

  render() {
    return (
      <div className="text-center colors">
        {
          this.state.colors.map((data) => {
            const colorStyle = {
              color: data.color,
              backgroundColor: data.color,
            };
            return (
              <div key={data.id}>
                <ColorPick colorStyle={colorStyle} id={data.id} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default productFilter;
