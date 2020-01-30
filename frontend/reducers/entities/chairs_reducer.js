import {RECEIVE_CHAIRS} from "../../actions/splash_actions"

const chairsReducer = function(oldState = {}, action){
    Object.freeze(oldState)

    let nextState; 

    switch (action.type) {
        case RECEIVE_CHAIRS:
            nextState = Object.assign({},oldState,action.chairs)
            return nextState
        default:
            return oldState
    }
}

export default chairsReducer;