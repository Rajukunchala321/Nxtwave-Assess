import React from 'react'
import './index.css'

export const ResultPage = () => {
  return (
    <section className='result-section'>
      <div className='result-main-container'>
        <div className='result-continer'>
          <img src='./resultSubmit.png' alt='result img' />
          <div className='result-txt-container'>
            <div className='cong-text'>Congrats! You completed the assessment.</div>
            <div className='time-txt'>Time Taken:<span>00:09:39</span></div>
            <div className='score-txt'>Your Score: <span>5</span></div>
            <button className='reattempt-btn'>Reattempt</button>

          </div>

        </div>

      </div>
    </section>
  )
}
