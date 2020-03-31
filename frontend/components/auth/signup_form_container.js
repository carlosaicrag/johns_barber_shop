import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, forgotPassword, clearErrors, clientSignup } from '../../actions/session_actions';
import { SessionForm } from './SessionForm';
import {updateBarberWorkingStatus} from './../../actions/barber_actions'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    signupConfirmation: state.ui.confirmation.signupConfirmation,
    formType: 'signup',
    navLink: <Link className="session__btn--nav" to="/login">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processBarberForm: (user) => dispatch(signup(user)),
    processClientForm: (client) => dispatch(clientSignup(client)),
    forgotPassword: (email) => dispatch(forgotPassword(email)),
    clearErrors: () => dispatch(clearErrors()),
    updateBarberWorkingStatus: (barber) => dispatch(updateBarberWorkingStatus(barber))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);