import { combineReducers } from 'redux';
import users from './users_reducer';
import chairs from './chairs_reducer';
import haircuts from './haircuts_reducer'
import clientHaircuts from "./client_haircuts_reducer"
import clientHaircutsAvgTimes from "./client_haircuts_avg_time_reducer"
// import barbers from './barbers_reducer';

export const entitiesReducer = combineReducers({
  users,
  chairs,
  haircuts,
  clientHaircuts,
  clientHaircutsAvgTimes
});