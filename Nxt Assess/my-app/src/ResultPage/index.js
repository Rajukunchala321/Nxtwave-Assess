import React, { useContext,useEffect } from "react";
import "./index.css";
import { Context } from "../Components/provider";
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie'

export const ResultPage = () => {
  const jwtToken = Cookies.get('jwtToken');
  const { minutes, score, seconds } = useContext(Context);
  const min = 9-minutes;
  const sec = 59 -seconds
   useEffect(() => {
      // Push current state to history so back won't leave
      window.history.pushState(null, "", window.location.href);
  
      const handlePopState = () => {
        // Push state again to prevent going back
        window.history.pushState(null, "", window.location.href);
        
      };
  
      window.addEventListener("popstate", handlePopState);
  
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, []);
  
   if(!jwtToken){
      return <Navigate to='/login' replace />
     }
  return (
    <section className="result-section">
      <div className="result-main-container">
        <div className="result-continer">
          {minutes > 1 ? (
            <>
              <img src="./resultSubmit.png" alt="result img" />
              <div className="result-txt-container">
                <div className="cong-text">
                  Congrats! You completed the assessment.
                </div>
                <div className="time-txt">
                  Time Taken:<span>00:{`${min}:${sec}`}</span>
                </div>
                <div className="score-txt">
                  Your Score: <span>{score}</span>
                </div>
                <a href="/" className="reattempt-btn">
                  Reattempt
                </a>
              </div>
            </>
          ) : (
            <>
              <img src="./timeout-img.png" alt="result img" />
              <div className="result-txt-container">
                <div className="cong-text">
                  Time is up
                </div>
                <div className="time-txt">
                 You did not complete the assessment within the time.
                </div>
                <div className="score-txt">
                  Your Score: <span>{score}</span>
                </div>
                <a href="/" className="reattempt-btn">
                  Reattempt
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
