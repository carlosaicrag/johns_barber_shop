export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_CURRENT_USER = 'SIGNUP_CURRENT_USER';
export const RECEIVE_FORGOT_PASSWORD = 'RECEIVE_FORGOT_PASSWORD';
export const RECEIVE_CLIENT = 'RECEIVE_CLIENT';
export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const LOGOUT_CLIENT = "LOGOUT_CLIENT"
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveCurrentClient = (currentClient) => ({
  type: RECEIVE_CLIENT,
  currentClient
});

export const signupCurrentUser = (confirmationMsg) => ({
  type: SIGNUP_CURRENT_USER,
  confirmationMsg
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
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
  return{
    type: CLEAR_ERRORS,
  }
}

export const clientSignup = user => dispatch => (
  APIUtil.clientSignup(user).then(currentClient => {
    dispatch(receiveCurrentClient(currentClient))
  }).fail(err => {
    dispatch(receiveErrors(err.responseJSON))
  })
)

export const signup = user => dispatch => (
  APIUtil.signup(user).then(currentUser => (
    // dispatch(signupCurrentUser(confirmationMsg))
    dispatch(receiveCurrentUser(currentUser))
  ), err => {
    dispatch(receiveErrors(err.responseJSON))
  })
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => {
    dispatch(receiveErrors(err.responseJSON))
  })
);

export const clientLogin = user => dispatch => {
  return(
    APIUtil.clientLogin(user).then(user => (
      dispatch(receiveCurrentClient(user))
    ), err => {
      dispatch(receiveErrors(err.responseJSON))
    })
  )
};

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
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