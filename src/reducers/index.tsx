import { combineReducers } from 'redux';
import goals from './goals';
import visibility from './visibility';

const rootReducer = combineReducers({
  goals,
  visibility,
});

export default rootReducer;