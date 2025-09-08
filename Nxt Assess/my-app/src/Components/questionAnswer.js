import React, { useContext, useState } from "react";
import "./index.css";
import { Context } from "./provider";
const QuestionAnswer = () => {
  const { apiState, state } = useContext(Context);
  const [selectOption, setSelectOption] = useState(null)
  console.log(apiState.data.questions);
  // console.log(apiState.data)
  const questions = apiState.data.questions;

  const question = questions?.[state.currentQuestion];
  console.log("state.currentQuestion", state.currentQuestion);

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
                className={`default-option ${selectOption===idx ? "selected":""}`}
                onClick={()=>setSelectOption(idx)} 
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
                className={`option-img ${selectOption ===idx ? "selected":"" }`}
                src={option.image_url}
                alt={`option-img-${option.id}`}
                onClick={()=>setSelectOption(idx)}
              />
            ))}
          </div>
        )}
        {question.options_type === "SINGLE_SELECT" && (
          <select  className="select">
            {question.options?.map((option, idx) => (
              <option onClick={()=>setSelectOption(idx)}  key={option.id} value={option.is_correct}>
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
