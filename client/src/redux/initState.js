const initState = () => {
  const state = {
    topics: [],
    questions: [],
    answer: {},
    score: null
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
  
}

export default initState
