import { DELETE_ID, SET_ID } from "../types/currentQuestion";

function currentQuestionReducer(state = null, action) {
  switch (action.type) {
    case SET_ID:
      return action.payload
    case DELETE_ID:
      return null
    default:
      return state;
  }
}

export default currentQuestionReducer
