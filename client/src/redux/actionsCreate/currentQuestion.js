import { DELETE_ID, SET_ID } from "../types/currentQuestion";

export function setCurrentQuestionID(id) {
  return {
    type: SET_ID,
    payload: id
  }
}

export function deleteCurrentQuestionID() {
  return {
    type: DELETE_ID
  }
}
