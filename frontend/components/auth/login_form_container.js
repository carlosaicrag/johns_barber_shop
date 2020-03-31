import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, forgotPassword, clearErrors, clientLogin } from '../../actions/session_actions';
import { SessionForm } from './SessionForm';
import {updateBarberWorkingStatus} from './../../actions/barber_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link className="session__btn--nav" to="/signup">Register</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processBarberForm: (user) => dispatch(login(user)),
    processClientForm: (client) => dispatch(clientLogin(client)),
    forgotPassword: (email) => dispatch(forgotPassword(email)),
    clearErrors: () => dispatch(clearErrors()),
    updateBarberWorkingStatus: (barber) => dispatch(updateBarberWorkingStatus(barber))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);