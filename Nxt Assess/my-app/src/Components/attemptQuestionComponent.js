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
      <div className='questions'>
        <div>
          <div className='question-txt'>Questions (10)</div>
          <div className='question-num-container'>
            <div className='number-btn current'>1</div>
            <div className='number-btn submited'>2</div>
            <div className='number-btn'>3</div>
          </div>
        </div>
        <button className='submit-btn'>Submit Assessment</button>
        </div>
    </div>
  )
}
