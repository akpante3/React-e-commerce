/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
import './AuthModal.scss';
import SignInForm from '../../forms/AuthForms/signin/SignInForm';
import SignUpForm from '../../forms/AuthForms/signup/SignUpForm';


/**
 * [AuthModal]: auth modal wraps the signup form and login form
 */
class AuthModal extends Component {
  state = {
    form: '',
  }

  componentDidMount() {
    this.setState({ form: this.props.form });
  }

  closeAuthModal = () => {
    this.props.toggleAuthModal('');
  };

  toggleAuthForms = (payload) => {
    this.setState({ form: payload });
  }

  render() {
    const { authUser } = this.props;
    const { form } = this.state;
    return (
      <CSSTransition
        in
        appear
        timeout={2000}
        classNames="enter"
      >
        <Fragment>
          <div className={authUser.customer_id ? 'close-wrapper' : 'auth-modal-wrapper'}>
            <div className="auth-modal">
              <div
                onClick={() => this.closeAuthModal()}
                className="text-right close-modal"
                key='click'
              >
            &times;
              </div>
              { form === 'signIn' ? <SignInForm toggleAuthForms={this.toggleAuthForms} /> : <SignUpForm toggleAuthForms={this.toggleAuthForms} />}
            </div>
          </div>
        </Fragment>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
});

export default connect(mapStateToProps)(AuthModal);
