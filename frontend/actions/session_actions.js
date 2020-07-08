export const RECEIVE_CURRENT_BARBER = 'RECEIVE_CURRENT_BARBER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_BARBER = 'LOGOUT_CURRENT_BARBER';
export const SIGNUP_CURRENT_BARBER = 'SIGNUP_CURRENT_BARBER';
export const RECEIVE_FORGOT_PASSWORD = 'RECEIVE_FORGOT_PASSWORD';
export const RECEIVE_CLIENT = 'RECEIVE_CLIENT';
export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const LOGOUT_CLIENT = "LOGOUT_CLIENT"
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentBarber = (currentBarber) => {
  //debugger
  return {
    type: RECEIVE_CURRENT_BARBER,
    currentBarber
  }
};

export const receiveCurrentClient = (currentClient) => ({
  type: RECEIVE_CLIENT,
  currentClient
});

export const signupCurrentBarber = (confirmationMsg) => ({
  type: SIGNUP_CURRENT_BARBER,
  confirmationMsg
})

export const logoutCurrentBarber = () => ({
  type: LOGOUT_CURRENT_BARBER
});

export const logoutCurrentClient = () => ({
  type: LOGOUT_CLIENT
})

export const receiveForgotPassword = (confirmationMsg) => ({
  type: RECEIVE_FORGOT_PASSWORD,
  confirmationMsg
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export const clientSignup = barber => dispatch => (
  APIUtil.clientSignup(barber).then(currentClient => {
    dispatch(receiveCurrentClient(currentClient))
  }).fail(err => {
    dispatch(receiveErrors(err.responseJSON))
  })
)

export const signup = barber => dispatch => (
  APIUtil.signup(barber).then(currentBarber => (
    // dispatch(signupCurrentBarber(confirmationMsg))
    dispatch(receiveCurrentBarber(currentBarber))
  ), err => {
    dispatch(receiveErrors(err.responseJSON))
  })
);

export const login = barber => dispatch => (
  APIUtil.login(barber).then(barber => {
    //debugger
    dispatch(receiveCurrentBarber(barber))
  }, err => {
    dispatch(receiveErrors(err.responseJSON))
  })
);

export const clientLogin = barber => dispatch => {
  return (
    APIUtil.clientLogin(barber).then(barber => (
      dispatch(receiveCurrentClient(barber))
    ), err => {
      dispatch(receiveErrors(err.responseJSON))
    })
  )
};

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentBarber())
  ))
);

export const clientLogout = () => dispatch => (
  APIUtil.clientLogout().then(() => (
    dispatch(logoutCurrentClient())
  ))
)

export const forgotPassword = (email) => dispatch => (
  APIUtil.forgotPassword(email).then((confirmationMsg) => (
    dispatch(receiveForgotPassword(confirmationMsg))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);