import React, { useState, useRef, useEffect } from "react";
import "./index.css";

export const TimerComponent = ({ initialMinutes = 8, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          if (minutes === 0) {
            clearInterval(timerRef.current);
            setIsActive(false); 
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timerRef.current); 
  }, [isActive, minutes, seconds]);

  return (
    <div className="timer-container">
      <div>Time Left</div>
      <div className="timer">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};
