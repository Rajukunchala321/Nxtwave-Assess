import React from "react";
import "./index.css";
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

export const Home = () => {
  const jwtToken = Cookies.get('jwtToken');
  
     
     if(!jwtToken){
      return <Navigate to='/login' replace />
     }
  return (
    <section>
      <div className="home-main-container">
        <div className="instruction-img">
          <div className="instructions-container">
            <div>Instructions</div>
            <ol>
              <li>
                <span>Total Questions:</span> 10
              </li>
              <li>
                <span>Types of Questions:</span> MCQs
              </li>
              <li>
                <span>Duration:</span> 10 Mins
              </li>
              <li>
                <span>Marking Scheme:</span> Every Correct response, get 1 mark
              </li>
              <li>
                All the progress will be lost, if you reload during the
                assessment
              </li>
            </ol>
            <button>Start Assessment</button>
         
          </div>
         <img src="../home-img.png" alt='' />
        </div>
      </div>
    </section>
  );
};
