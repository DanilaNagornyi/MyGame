import { combineReducers } from 'redux';
import gameReducer from './gameReducers';

const rootReducer = combineReducers({
  topics: gameReducer,
  // score: counterReducer
})


export default rootReducer
