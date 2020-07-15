import { RECEIVE_PROFILE_CLIENT} from "../../actions/client_actions"
import {RECEIVE_BARBERS} from "../../actions/splash_actions"

const clientsReducer = function (oldState = {}, action) {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_PROFILE_CLIENT:
      return action.clients
    case RECEIVE_BARBERS:
      if (!action.clients){
        return {}
      }
      return action.clients
    default:
      return oldState
  }
}

export default clientsReducer;