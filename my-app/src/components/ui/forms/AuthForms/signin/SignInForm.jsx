/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import AppButtonLarge from '../../../buttons/AppButton/AppButtonLarge';
import { eraseAuthError } from '../../../../../store/actions/authActions/AuthUser';
import { signInUser } from '../../../../../store/actions/authActions/SignIn';
import '../AuthForms.scss';


class SignInForm extends Component {
state = {
  email: '',
  password: '',
}

onChangeHandler = (e) => {
  this.props.actions.eraseAuthError();
  this.setState({
    [e.target.name]: e.target.value,
  });
}

handleSubmit = () => {
  this.props.actions.signInUser({ ...this.state });
}

toggleForms = (payload) => {
  this.props.toggleAuthForms(payload);
}

render() {
  const { authError } = this.props;
  return (
    <div className="text-center">
      {authError && authError.message ? toastr.error('An Error Occurred', authError.message) : null}
      <div className='sign-in-header'>Sign In</div>
      <div className="sign-in-inputs mt-3">
        <input name='email' placeholder='email' type="text" onChange={this.onChangeHandler} className="form-control" />
        <br />
        <input name='password' placeholder='password' type="password" onChange={this.onChangeHandler} className="form-control" />
      </div>
      <br />
      <input className="mr-3" type="checkbox" name="delivery" value="information" />
      <span>Remember me</span>
      <div className="mt-3">
        <AppButtonLarge
          title="Sign In"
          buttonClickHandler={this.handleSubmit}
        />
      </div>
      <br />
      <div className="col-sm-12 row p-0 sign-in-footer">
        <div className="col text-center" onClick={() => this.toggleForms('signUp')}>I dont Have an acconut</div>
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  products: state.products,
  authError: state.authUser.authError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { signInUser, eraseAuthError },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
