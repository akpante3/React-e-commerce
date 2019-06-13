import React, { Component } from 'react';
import ProductSize from './ProductSize';
import './ProductSizes.scss';

class productFilter extends Component {
  state = {
    colors: [
      { id: 1, size: 'XL' },
      { id: 2, size: 'L' },
      { id: 3, size: 'M' },
      { id: 4, size: 'S' },
    ],
    selected: [],
  }

  selectedAttributes = (size, selected) => {
    const list = [...this.state.selected];
    if (selected) {
      list.push(size);
    } else {
      const data = list.indexOf(size);
      list.splice(data, 1);
    }
    this.setState({
      selected: [...list],
    });
    this.props.updateAttributes(list);
  }

  render() {
    return (
      <div className="text-center sizes row col-md-12">
        {
         this.state.colors.map(data => (
           <div>
             <ProductSize
               size={data.size}
               id={data.id}
               selectedAttributes={this.selectedAttributes}
             />
           </div>
         ))
        }
      </div>
    );
  }
}

export default productFilter;
