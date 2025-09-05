import React, {useContext} from "react";
import './index.css'
import {Context} from './provider'
const QuestionAnswer = () => {
  const {apiState,state } = useContext(Context);
  console.log(apiState.data.questions);
  // console.log(apiState.data)
  const questions = apiState.data.questions

  const question = questions?.[state.currentQuestion]

  if (!question){
    return(<div>Loading pls wait....</div>)
  }

  return(
     <div>
      <h2>{question.question_text}</h2>
      <div className="answer-container"> 
        {question.options_type ==="DEFAULT"  ?(<div className="default-options-container">
          <div value='true' className="default-option">Facebook</div>
          <div className="default-option">Facebook</div>
          <div className="default-option">Facebook</div>
          <div className="default-option">Facebook</div>
        </div>):(<p>Somthing went wrong</p>)}
        {question.options_type === "IMAGE"?(<div className="default-options-container">
          <img value='true' className="option-img" src="../img-option.png" alt="option img"/>
          <img className="option-img" src="../img-option.png" alt="option img"/>
          <img className="option-img" src="../img-option.png" alt="option img"/>
           <img className="option-img" src="../img-option.png" alt="option img"/>
        </div>):(<p>Somthing went wrong</p>)}
        {question.options_type ==="SINGLE_SELECT" ?( <select className="select">
             <option value='true'  >Select 1</option>
             <option>Select 1</option>
             <option>Select 1</option>
          </select>):(<p>Somthing went wrong</p>)}
      </div>
    </div>
  )
};
export default QuestionAnswer



 