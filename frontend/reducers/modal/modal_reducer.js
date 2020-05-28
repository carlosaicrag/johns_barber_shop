import { OPEN_NAV_MODAL, CLOSE_MODAL, REMINDER_MODAL } from '../../actions/modal_actions'

export default function modalReducer(state = null, action) {
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case OPEN_NAV_MODAL:
            return action;
        case REMINDER_MODAL:
            return action;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}