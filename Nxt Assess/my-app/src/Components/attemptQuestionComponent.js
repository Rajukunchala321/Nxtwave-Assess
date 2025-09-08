import React, {useContext} from 'react';
import {Context} from './provider'

export const AttemptQuestionComponent = () => {
  const {apiState, dispatch, state, dispatchTwo}= useContext(Context);
  
  
    const handleCurrentBtn = (index)=>{
      console.log(index);
      dispatchTwo({type:"GOTO_NXT_QUESTION", index:index})

    }
  
  return (
    <div className='attempt-container'>
      <div className='attempt-question-container'>
        <div className='answer-count-container'>
          <div className='ans-count'>{state.answered.length}</div>
          <div className='ans-txt'>Answered Questions</div>
        </div>
        <div className='answer-count-container'>
          <div className='question-count'>{(apiState.data.total) - (state.answered.length)}</div>
          <div className='ques-txt'>Unanswered Questions</div>
        </div>
      </div>
      <div className='questions'>
        <div>
          <div className='question-txt'>Questions ({apiState.data.total})</div>
          <div className='question-num-container'>
            {apiState.data.questions?.map((_, index)=>{ 
             const isActive =  state.currentQuestion ===(index)
             const isAnswered = state.answered[(index)] !==undefined;
              return(<div onClick={()=>handleCurrentBtn(index)}  key={index} className={`number-btn ${isActive ? "current": ''} ${isAnswered ? "submited":""}`}>{index+1}</div>)
            }
              )}
          </div>
        </div>
        <button className='submit-btn'>Submit Assessment</button>
        </div>
    </div>
  )
}
