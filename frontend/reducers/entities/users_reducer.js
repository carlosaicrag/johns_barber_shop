import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import {RECEIVE_CHAIRS} from "../../actions/splash_actions"
import {RECEIVE_HAIRCUTS} from "../../actions/choose_haircut_actions"

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser
      });
      return nextState;
    case RECEIVE_HAIRCUTS:
      return action.barbers
    case RECEIVE_CHAIRS:
      return action.barbers
    default:
      return oldState;
  }
};

export default usersReducer;