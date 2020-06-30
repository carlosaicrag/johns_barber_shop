import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import {RECEIVE_BARBERS} from "../../actions/splash_actions"
import {RECEIVE_HAIRCUTS} from "../../actions/choose_haircut_actions"
import { RECEIVE_BARBER, RECEIVE_QUEUE } from '../../actions/barber_actions';
 
const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser
      });
      return nextState;
    case RECEIVE_BARBER: 
      nextState[action.barber.id] = action.barber;
      return nextState
    case RECEIVE_HAIRCUTS:
      return action.barbers
    case RECEIVE_BARBERS:
      if (!action.barbers) return {}
      return action.barbers
    case RECEIVE_QUEUE:
        return action.barber
    default:
      return oldState;
  }
};

export default usersReducer;