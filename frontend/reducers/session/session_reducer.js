import {
  RECEIVE_CURRENT_BARBER,
  LOGOUT_CURRENT_BARBER,
  RECEIVE_CLIENT,
  LOGOUT_CLIENT
} from '../../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_BARBER:
      return { id: action.currentBarber.id, clientId: null };
    case RECEIVE_CLIENT:
      return { clientId: action.currentClient.id, id: null }
    case LOGOUT_CLIENT:
      return _nullUser
    case LOGOUT_CURRENT_BARBER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;