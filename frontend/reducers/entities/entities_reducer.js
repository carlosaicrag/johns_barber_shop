import { combineReducers } from 'redux';
import users from './users_reducer';
import chairs from './chairs_reducer';
import barbers from './barbers_reducer';

export const entitiesReducer = combineReducers({
  users,
  chairs,
  barbers
});