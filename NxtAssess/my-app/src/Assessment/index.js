import React, { useState, useContext } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import QuestionAnswer from "../Components/questionAnswer";
import { TimerComponent } from "../Components/timerComponent";
import { AttemptQuestionComponent } from "../Components/attemptQuestionComponent";
import { Context } from "../Components/provider";

export const Assessment = () => {
  const [optId, setOptId] = useState(null);
  const { dispatchTwo, state } = useContext(Context);
  const jwtToken = Cookies.get("jwtToken");
  const [errMsg, setErrMsg] = useState("");

  const hanleOptId = (id) => {
    setOptId(id);
  };
 
  const handleNxtQuest = () => {
    if (optId) {
      setErrMsg("");
      dispatchTwo({
        type: "ANSWER_QUESTION",
        questionIndex: state.currentQuestion,
        optionIndex: optId,
      });
      const answeredCount = Object.keys(state.answered).length;
      if (answeredCount <9 && state.currentQuestion !== 9){
         dispatchTwo({
        type: "GOTO_NXT_QUESTION",
        index: state.currentQuestion + 1,
      })
      }else if(answeredCount ===9){
        setErrMsg("You Attement All Questions Pls Submit Your Assignment");
      }else{
        setErrMsg("Pending Question are there. Pls Select Another Question")
      }
     
      setOptId(null);
    } else {
      setErrMsg("*Please select an option before continuing.");
    }
  };

  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }
  return (
    <section className="assessment-section">
      <div className="assessment-main-container">
        <div className="question-card">
          <QuestionAnswer hanleOptId={hanleOptId} />
          <div className="nxt-btn-container">
           
            <div className="errMsg">{errMsg}</div>
            <button onClick={() => handleNxtQuest()} className="nxt-btn">
              Next Question
            </button>
          </div>
        </div>
        <div className="timer-submit-container">
          <TimerComponent initalMinutes={5} initalSeconds={60} />
          <AttemptQuestionComponent />
        </div>
      </div>
    </section>
  );
};
