import { RECEIVE_CLIENT_HAIRCUT } from "../../actions/client_haircut_actions"
import { RECEIVE_BARBERS } from "../../actions/splash_actions"
import {RECEIVE_QUEUE} from "../../actions/barber_actions"

const clientHaircutsReducer = function (oldState = {}, action) {
    Object.freeze(oldState)

    let nextState;

    switch (action.type) {
        case RECEIVE_CLIENT_HAIRCUT:
            return action.clientHaircut
        case RECEIVE_BARBERS:
            return action.clientHaircuts
        default:
            return oldState
    }
}

export default clientHaircutsReducer;