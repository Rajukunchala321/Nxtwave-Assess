import React from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { QuestionAnswer } from "../Components/questionAnswer"; 
import {TimerComponent} from '../Components/timerComponent';
import {AttemptQuestionComponent} from '../Components/attemptQuestionComponent';

export const Assessment = () => {
  const jwtToken = Cookies.get("jwtToken");
  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }
  return (
    <section className="assessment-section">
      <div className="assessment-main-container">
        <div className="question-card">
          <QuestionAnswer />
        </div>
         <div className="timer-submit-container">
            <TimerComponent />
            <AttemptQuestionComponent />

          </div>
      </div>
    </section>
  );
};
