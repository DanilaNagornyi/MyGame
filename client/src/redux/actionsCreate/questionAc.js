import {  GET_QUESTION } from '../types/gameTypes'

export const getQuestion = (question) => {
  return {
    type: GET_QUESTION,
    payload: question
  }
}
