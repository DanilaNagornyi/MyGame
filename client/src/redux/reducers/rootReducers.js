import { combineReducers } from 'redux';
import currentQuestionReducer from './currentQuestionReducer';
import gameReducer from './gameReducers';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  topics: gameReducer,
  currentQuestionID: currentQuestionReducer,
  // score: counterReducer
  question: questionReducer,
})


export default rootReducer
