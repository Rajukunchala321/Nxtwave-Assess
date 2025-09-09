import React, {useState, useContext} from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import  QuestionAnswer  from "../Components/questionAnswer";
import { TimerComponent } from "../Components/timerComponent";
import { AttemptQuestionComponent } from "../Components/attemptQuestionComponent";
import {Context} from '../Components/provider'
export const Assessment = () => {
  const [optId, setOptId] = useState(null)
  const {dispatchTwo,state} = useContext(Context)
  const jwtToken = Cookies.get("jwtToken");
  const hanleOptId =(id)=>{
      setOptId(id);
  }
  const handleNxtQuest =()=>{
    dispatchTwo({
      type:"ANSWER_QUESTION", 
       questionIndex: state.currentQuestion,
       optionIndex: optId,
    
    }) 
  }

  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }
  return (
    <section className="assessment-section">
      <div className="assessment-main-container">
        <div className="question-card">
          <QuestionAnswer hanleOptId={hanleOptId} />
          <div className="nxt-btn-container">
            <button onClick={ ()=>handleNxtQuest()} className="nxt-btn">Next Question</button>
          </div>
        </div>
        <div className="timer-submit-container">
          <TimerComponent />
          <AttemptQuestionComponent />
        </div>
      </div>
    </section>
  );
};
