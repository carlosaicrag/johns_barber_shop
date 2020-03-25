import { RECEIVE_CLIENT_HAIRCUT } from "../../actions/client_haircut_actions"

const clientHaircutsReducer = function (oldState = {}, action) {
    Object.freeze(oldState)

    let nextState;

    switch (action.type) {
        case RECEIVE_CLIENT_HAIRCUT:
            return action.clientHaircut
        default:
            return oldState
    }
}

export default clientHaircutsReducer;