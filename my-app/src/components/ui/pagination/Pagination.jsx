import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    current: 1,
  };

  onChange = (page) => {
    this.setState({
      current: page,
    });
    this.props.paginateProduct(page);
  }

  render() {
    const { count } = this.props;
    return (
      <RcPagination
        onChange={this.onChange}
        current={this.state.current}
        total={count}
        defaultPageSize={10}
      />
    );
  }
}
export default Pagination;
