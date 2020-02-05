import confirmation from './confirmation_reducer';
import { combineReducers } from 'redux';
import modal from "../modal/modal_reducer"

export const uiReducer = combineReducers({
   confirmation,
   modal
});