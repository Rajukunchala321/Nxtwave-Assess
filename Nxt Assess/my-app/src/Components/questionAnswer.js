import React, { useContext,  useState, useEffect } from "react";
import "./index.css";
import { Context } from "./provider";
const QuestionAnswer = ({ hanleOptId }) => {
  const { apiState, state } = useContext(Context);
  const [selectOption, setSelectOption] = useState(null);
  

  const questions = apiState.data.questions;

  const question = questions?.[state.currentQuestion];
   useEffect(()=>{
     const answeredId = state.answered[state.currentQuestion];
     setSelectOption(answeredId || null);
  },[state.currentQuestion, state.answered])

  const handleSelectOpt = (id) => {
    setSelectOption(id);
    hanleOptId(id);
  };

  if (!question) {
    return <div>Loading pls wait....</div>;
  }
  
 
  return (
    <div>
      <h2>{question.question_text}</h2>
      <div className="answer-container">
        {question.options_type === "DEFAULT" && (
          <div className="default-options-container">
            {question.options?.map((option, idx) => (
              <div
                key={idx}
                id={option.id}
                value={option.is_correct}
                className={`default-option ${
                  selectOption === option.id  ? "selected" : ""
                } `}
                onClick={() => handleSelectOpt(option.id)}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
        {question.options_type === "IMAGE" && (
          <div className="default-options-container">
            {question.options?.map((option, idx) => (
              <img
                key={idx}
                id={option.id}
                value={option.is_correct}
                className={`option-img ${
                  selectOption === option.id ? "selected" : ""
                } `}
                src={option.image_url}
                alt={`option-img-${option.id}`}
                onClick={() => handleSelectOpt(option.id)}
              />
            ))}
          </div>
        )}
        {question.options_type === "SINGLE_SELECT" && (
          <select
            onChange={(e) => handleSelectOpt(e.target.value)}
            className="select"
          >
            {question.options?.map((option) => (
              <option key={option.id} id={option.id} value={option.id}>
                {option.text}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};
export default QuestionAnswer;
