import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeScore } from '../../redux/actionsCreate/changeScoreAC'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, .8)',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const BUTTON_CLOUSE_STYLES = {
  position: 'fixed',
  top: 0,
  left: 630,
  right: 0,
  bottom: 100,
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, .7)',
  zIndex: 1001
}

const ModalWindow = ({ open, children, onClose }) => {
  const [answer, setAnswer] = useState('')
  const question = useSelector(state => state.question)
  const dispatch = useDispatch()
  if (!open) return null

  const submitAnswerHandler = async (score, answer, id) => {
    const response = await fetch('http://localhost:3000/api/v1/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answer, id })
    })
    if (response.status === 200) {
      console.log('Ответ верен')
      dispatch(changeScore(score));
      setAnswer('')
    } else {
      console.log('Ответ не верен')
      setAnswer('')

    }
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose} style={BUTTON_CLOUSE_STYLES}>❌</button>
        {children}
        <div></div>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
        <button onClick={() => submitAnswerHandler(question.score, answer, question._id)} className="get-started-btn scrollto mx-2">Done</button>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default ModalWindow;
