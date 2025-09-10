import React, {useCallback, createContext, useReducer, useEffect,useState, useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";


const ApiInitalState = {
  loading: false,
  data: [],
  error: "",
};

const InitalState = {
  currentQuestion: 0,
  answered: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "", data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

function reducerTwo(state, action) {
  switch (action.type) {
    case "GOTO_NXT_QUESTION":
      return { ...state, currentQuestion: action.index };

    case "ANSWER_QUESTION":
      return {
        ...state,
        answered: {
          ...state.answered,
          [action.questionIndex]: action.optionIndex,
        },
      };
    default:
      return state;
  }
}

export const Context = createContext();

const ContextProvider = ({ children }) => {

  const [apiState, dispatch] = useReducer(reducer, ApiInitalState);
  const [state, dispatchTwo] = useReducer(reducerTwo, InitalState);

   const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(59);
  const [isActive, setIsActive] = useState(true);
  const timerRef = useRef();
  const jwtTokenRef = useRef();
  const [score, setScore]= useState();
  
    // submit assigment

  const handleSubmit = useCallback(()=>{
    console.log("clikceds");
     clearInterval(timerRef.current);
      setIsActive(false); 
      console.log(minutes, seconds);
      // console.log(state);
       console.log(apiState)
     

  const  calulate = Object.entries(state.answered).reduce((acc, [qIndex, optId]) => {
  const question = apiState.data.questions[qIndex];
  const option = question?.options?.find(o => o.id === optId);
  console.log(option?.is_correct)
  if (option?.is_correct === 'true') {
    acc++;
  }
  return acc;
}, 0);
  setScore(calulate)
  }, [minutes,seconds, apiState, state.answered])

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          if (minutes === 0) {
            clearInterval(timerRef.current);
            setIsActive(false);
            handleSubmit() 
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timerRef.current); 
  }, [isActive, minutes, seconds,handleSubmit]);



  useEffect(() => {
      jwtTokenRef.current = Cookies.get("jwtToken");
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await axios.get(
          "https://apis.ccbp.in/assess/questions",
          {
            headers: {
              Authorization: `Bearer ${jwtTokenRef.current}`,
            },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    fetchData();

    
  }, []);






  return (
    <Context.Provider value={{isActive,handleSubmit,score, minutes, seconds, apiState, dispatch, state, dispatchTwo }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
