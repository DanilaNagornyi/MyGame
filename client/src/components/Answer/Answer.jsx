import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuestion } from "../../redux/actionsCreate/questionAc"

function Answer() {

  const question = useSelector(state => state.question)
  const dispatch = useDispatch()
  const id = useSelector(state => state.currentQuestionID)
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/${id}`)
      .then(res => res.json())
      .then(question => dispatch(getQuestion(question)))

  }, [])
  return (
    <div>{question.question}</div>
  )
}

export default Answer
