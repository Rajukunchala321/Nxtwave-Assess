import React, {useContext} from 'react';
import {Context} from './provider'

export const AttemptQuestionComponent = () => {
  const {apiState, state, dispatchTwo}= useContext(Context);
  console.log("state",state)
  const answeredCount =  Object.keys(state.answered).length
  console.log(answeredCount)
  
  
    const handleCurrentBtn = (index)=>{
      dispatchTwo({type:"GOTO_NXT_QUESTION", index:index})
       console.log("index",index)

    }
  
  return (
    <div className='attempt-container'>
      <div className='attempt-question-container'>
        <div className='answer-count-container'>
          <div className='ans-count'>{"answeredCount"}</div>
          <div className='ans-txt'>Answered Questions</div>
        </div>
        <div className='answer-count-container'>
          {/* <div className='question-count'>{(apiState.data.total) - (answeredCount)}</div> */}
          <div className='ques-txt'>Unanswered Questions</div>
        </div>
      </div>
      <div className='questions'>
        <div>
          <div className='question-txt'>Questions ({apiState.data.total})</div>
          <div className='question-num-container'>
            {apiState.data.questions?.map((_, index)=>{ 
              const isActive =  state.currentQuestion ===(index+1)
             const isAnswered = state.answered[(index+1)] ===undefined;
              return(<div onClick={()=>handleCurrentBtn(index+1)}  key={index+1} className={`number-btn ${isActive ? "current": ''} ${isAnswered ? "submited":""}`} >{index+1}</div>)
            }
              )}
          </div>
        </div>
        <button className='submit-btn'>Submit Assessment</button>
        </div>
    </div>
  )
}
