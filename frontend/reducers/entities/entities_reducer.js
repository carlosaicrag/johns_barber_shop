import { combineReducers } from 'redux';
import users from './users_reducer';
import chairs from './chairs_reducer';
<<<<<<< HEAD
import barbers from './barbers_reducer';
=======
import haircuts from './haircuts_reducer'
>>>>>>> master

export const entitiesReducer = combineReducers({
  users,
  chairs,
<<<<<<< HEAD
  barbers
=======
  haircuts
>>>>>>> master
});