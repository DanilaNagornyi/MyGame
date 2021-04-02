import { combineReducers } from 'redux';
import gameReducer from './gameReducers';
import scoreReducer from './scoreReducer'

const rootReducer = combineReducers({
  topics: gameReducer,
  score: scoreReducer,
})


export default rootReducer
