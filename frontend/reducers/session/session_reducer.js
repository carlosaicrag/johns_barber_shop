import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_CLIENT,
  LOGOUT_CLIENT
} from '../../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id, clientId: null };
    case RECEIVE_CLIENT:
      return {clientId: action.currentClient.id, id: null}
    case LOGOUT_CLIENT:
      return _nullUser
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;