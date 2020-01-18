import { combineReducers } from 'redux';
import goals from './goals';
import goalTypes from './goalTypes';

const rootReducer = combineReducers({
  goals,
  goalTypes,
});

export default rootReducer;