import { combineReducers } from 'redux';
import users from './users_reducer';
import chairs from './chairs_reducer';

export const entitiesReducer = combineReducers({
  users,
  chairs
});