import { RECEIVE_QUEUE } from '../../actions/barber_actions';


const queueReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_QUEUE: 
        nextState = action.queue;
        return nextState
        default: {
            return oldState
        }
    }
}

export default queueReducer;