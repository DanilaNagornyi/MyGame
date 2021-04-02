import { ALL_TOPICS, CHANGE_SCORE } from '../types/gameTypes'


const scoreReducer = (state = 0, action) => {
  switch (action.type) {
      case CHANGE_SCORE:
        return (state + action.payload)

    default:
      return state
  }
}

export default scoreReducer
