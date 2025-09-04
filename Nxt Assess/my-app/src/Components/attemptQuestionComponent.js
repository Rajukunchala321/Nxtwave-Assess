import React from 'react'

export const AttemptQuestionComponent = () => {
  return (
    <div className='attempt-container'>
      <div className='attempt-question-container'>
        <div className='answer-count-container'>
          <div className='ans-count'>2</div>
          <div className='ans-txt'>Answered Questions</div>
        </div>
        <div className='answer-count-container'>
          <div className='question-count'>2</div>
          <div className='ques-txt'>Unanswered Questions</div>
        </div>
      </div>
    </div>
  )
}
