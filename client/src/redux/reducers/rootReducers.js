import { combineReducers } from 'redux';
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  topics: gameReducer,
  score: counterReducer
})


export default rootReducer
