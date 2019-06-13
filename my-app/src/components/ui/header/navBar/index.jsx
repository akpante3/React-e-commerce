import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBottomItems from './NavBottomItem';
import NavTopItems from './NavTopItems';

/**
 * @param
 */
class NavBar extends Component {
  state = {
    showAuthModal: false,
    showCartModal: false,
    modal: '',
  }

  toggleAuthModal = (data) => {
    this.setState(prevState => ({
      showAuthModal: !prevState.showAuthModal,
      modal: data,
    }));
    return this.state.modal;
  }

  toggleCartModal = () => {
    this.setState(prevState => ({
      showCartModal: !prevState.showCartModal,
    }));
    return this.state.modal;
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-top">
          <NavTopItems
            toggleAuthModal={this.toggleAuthModal}
            toggleCartModal={this.toggleCartModal}
          />
        </div>
        <div className="navbar navbar-bottom">
          <NavBottomItems />
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(NavBar));