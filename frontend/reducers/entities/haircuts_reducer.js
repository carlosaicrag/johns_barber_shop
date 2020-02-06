import { RECEIVE_HAIRCUTS } from "../../actions/choose_haircut_actions"

const haircutsReducer = function (oldState = {}, action) {
    Object.freeze(oldState)

    let nextState;

    switch (action.type) {
        case RECEIVE_HAIRCUTS:
            nextState = Object.assign({}, oldState, action.haircuts)
            return nextState
        default:
            return oldState
    }
}

export default haircutsReducer;