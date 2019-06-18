/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { eraseAuthError } from '../../../../../store/actions/authActions/AuthUser';
import AppButtonLarge from '../../../buttons/AppButton/AppButtonLarge';
import { signUpUser } from '../../../../../store/actions/authActions/SignUp';
import '../AuthForms.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';


class SignUpForm extends Component {
state = {
  email: '',
  password: '',
  name: '',
}

onChangeHandler = (e) => {
  if (this.props.authError) {
    this.props.actions.eraseAuthError();
  }
  this.setState({
    [e.target.name]: e.target.value,
  });
}

handleSubmit = () => {
  this.props.actions.signUpUser({ ...this.state });
}

toggleForms = (payload) => {
  this.props.toggleAuthForms(payload);
}

render() {
  const { authError } = this.props;
  return (
    <div>
      {authError && authError.message ? toastr.error('An Error Occurred', authError.message) : null }
      <div className="text-center">
        <div className='sign-in-header'>Sign Up</div>
        <div className="sign-in-inputs mt-3">
          <input name='email' placeholder='email' type="text" onChange={this.onChangeHandler} className="form-control" />
          <br />
          <input name='name' placeholder='name' type="text" onChange={this.onChangeHandler} className="form-control" />
          <br />
          <input name='password' placeholder='password' type="text" onChange={this.onChangeHandler} className="form-control" />
        </div>
        <br />
        <div>
          <AppButtonLarge
            title="Sign Up"
            buttonClickHandler={this.handleSubmit}
          />
        </div>
        <div className="mt-3 sign-up-footer">
            Already a member?
          <span onClick={() => this.toggleForms('signIn')} className="sign-in-link">Sign In</span>
        </div>
      </div>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { signUpUser, eraseAuthError },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  authUser: state.authUser.authUser,
  authError: state.authUser.authError,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));
