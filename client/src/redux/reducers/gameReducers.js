import { ALL_TOPICS } from '../types/gameTypes'


const gameReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_TOPICS:
      return action.payload


    default:
      return state
  }
}

export default gameReducer
