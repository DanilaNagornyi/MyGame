import { combineReducers } from 'redux';
import currentQuestionReducer from './currentQuestionReducer';
import gameReducer from './gameReducers';
import questionReducer from './questionReducer';
import scoreReducer from './scoreReducer';

const rootReducer = combineReducers({
  topics: gameReducer,
  currentQuestionID: currentQuestionReducer,
  score: scoreReducer,
  question: questionReducer,
})


export default rootReducer
