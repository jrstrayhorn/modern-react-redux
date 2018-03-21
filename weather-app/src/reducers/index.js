import { combineReducers } from 'redux';
import weather from './weather';
import error from './error';

const rootReducer = combineReducers({
  weather,
  error
});

export default rootReducer;
