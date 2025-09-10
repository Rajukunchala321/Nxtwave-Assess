import React, {useContext} from 'react';
import {Context} from './provider';
import { useNavigate } from 'react-router-dom';

export const AttemptQuestionComponent = () => {
  const {apiState, state, dispatchTwo, handleSubmit}= useContext(Context);
  
  const navigate = useNavigate()
  const answeredCount =  Object.keys(state.answered).length
    const handleCurrentBtn = (index)=>{
      dispatchTwo({type:"GOTO_NXT_QUESTION", index:index})
    }

    const submitAndNavigate = ()=>{
      if(answeredCount>0){
         navigate("/result", {replace:false})
        handleSubmit()
      }
   
    }
  
  return (
    <div className='attempt-container'>
      <div className='attempt-question-container'>
        <div className='answer-count-container'>
          <div className='ans-count'>{answeredCount}</div>
          <div className='ans-txt'>Answered Questions</div>
        </div>
        <div className='answer-count-container'>
          <div className='question-count'>{(apiState.data.total) - (answeredCount)}</div>
          <div className='ques-txt'>Unanswered Questions</div>
        </div>
      </div>
      <div className='questions'>
        <div>
          <div className='question-txt'>Questions ({apiState.data.total})</div>
          <div className='question-num-container'>
            {apiState.data.questions?.map((_, index)=>{ 
             
              const isActive =  state.currentQuestion ===(index)
             const isAnswered = (index) in state.answered;
              return(<div onClick={()=>handleCurrentBtn(index)}  key={index+1} className={`${isActive ? "current": ''} ${isAnswered ? "submited":""}`} >{index+1}</div>)
            }
              )}
          </div>
        </div>
        <button onClick={submitAndNavigate} className='submit-btn'>Submit Assessment</button>
        </div>
    </div>
  )
}
