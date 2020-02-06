

import { RECEIVE_BARBER } from '../../actions/barber_actions';


export const barbersReducer = (action, oldState = {}) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_BARBER: 
        nextState[action.barber.id] = action.barber;
        return nextState
        default: {
            return oldState
        }
    }
}