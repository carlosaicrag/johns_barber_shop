import { combineReducers } from 'redux';
import users from './users_reducer';
import chairs from './chairs_reducer';
import haircuts from './haircuts_reducer'
import queue from './queue_reducer';

export const entitiesReducer = combineReducers({
  users,
  chairs,
  queue,
  haircuts
});