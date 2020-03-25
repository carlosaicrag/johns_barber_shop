import { RECEIVE_CLIENT_HAIRCUT } from "../../actions/client_haircut_actions"

const clientHaircutAvgTimesReducer = function (oldState = {}, action) {
    Object.freeze(oldState)

    let nextState;

    switch (action.type) {
        case RECEIVE_CLIENT_HAIRCUT:
            return action.clientHaircutAvgTime
        default:
            return oldState
    }
}

export default clientHaircutAvgTimesReducer;