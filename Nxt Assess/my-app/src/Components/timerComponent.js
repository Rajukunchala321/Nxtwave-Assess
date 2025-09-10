import React,{useContext} from "react";
import "./index.css";
import { Context } from "./provider";


export const TimerComponent = () => {
   const {minutes, seconds} = useContext(Context)

  return (
    <div className="timer-container">
      <div>Time Left</div>
      <div className="timer">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};
