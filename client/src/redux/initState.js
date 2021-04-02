const initState = () => {
  const state = {
    topics: [],
    questions: [],
    answer: {}
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
  
}

export default initState
