import { CHANGE_SCORE } from "../types/scoreTypes"

export const changeScore = (score) => {
  return {
    type: CHANGE_SCORE,
    payload: score
  }
}
