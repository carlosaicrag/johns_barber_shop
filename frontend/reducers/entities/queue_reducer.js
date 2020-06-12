import { RECEIVE_QUEUE } from '../../actions/barber_actions';


const queueReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_QUEUE: 
          return action.clientHaircut
        default: {
            return oldState
        }
    }
}

export default queueReducer;