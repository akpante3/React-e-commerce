import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer';
import { getDepartments } from '../../../store/actions/getDepartments';
import './MainLayout.scss';


/**
 * [description]: this is the wrapper for the application
 * [props]: receives components as children
 */
class MainLayout extends Component {
  state = {}

  componentDidMount() {
    this.props.actions.getDepartments();
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Header />
        <main className="main-layout">
          <div className="main-layout-children">
            {children}
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getDepartments },
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(MainLayout);
