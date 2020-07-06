import { combineReducers } from 'redux';
import barbers from './barbers_reducer';
import haircuts from './haircuts_reducer'
import queue from './queue_reducer';
import clientHaircuts from "./client_haircuts_reducer"

export const entitiesReducer = combineReducers({
  barbers,
  queue,
  haircuts,
  clientHaircuts,
})