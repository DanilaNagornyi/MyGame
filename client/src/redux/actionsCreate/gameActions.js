import { ALL_TOPICS } from '../types/gameTypes'

export const allTopics = (topics) => {
  return {
    type: ALL_TOPICS,
    payload: topics
  }
}
