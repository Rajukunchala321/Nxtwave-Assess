import React, {createContext,useReducer, useEffect} from 'react';
import Cookies from 'js-cookie'
import axios from "axios"

const ApiInitalState ={
    loading:false,
    data:[],
    error:''
}

const InitalState = {
    currentQuestion:0,
    answered:[],
}

function reducer(state, action){
    switch(action.type){
        case "FETCH_START":
            return {...state, loading:true, error:''};
        case "FETCH_SUCCESS":
            return {...state, loading:false, error:'', data: action.payload};
        case "FETCH_ERROR":
            return {...state, loading:false, data:[], error: action.payload};
        default:
            return state
    }
}

function reducerTwo(state, action){
    switch(action.type){
        case "GOTO_NXT_QUESTION":
            return{...state, currentQuestion: action.index};
        case "ANSWER_QUESTION":
            return{
                ...state, 
                answered:state.answered.includes(action.index)?state.answered: [...state.answered, action.index]
            }
        default:
            return state;    
    }
}

export const Context = createContext()

const ContextProvider = ({children}) => {
    const [apiState, dispatch] =  useReducer(reducer, ApiInitalState);
    const [state, dispatchTwo] = useReducer(reducerTwo, InitalState)
    

    useEffect(()=>{
        const jwtToken = Cookies.get('jwtToken');
        const fetchData = async()=>{
            dispatch({type: "FETCH_START"});
            try {
                const response = await axios.get("https://apis.ccbp.in/assess/questions", 
                {
                    headers: {
                        Authorization:`Bearer ${jwtToken}`
                    }
                })
                dispatch({type:"FETCH_SUCCESS", payload: response.data});
                console.log(response)

            }catch(err){
                dispatch({type: "FETCH_ERROR", payload: err.message});

            }

        }
        fetchData();
    }, [])
   

  return (
    <Context.Provider value={{apiState, dispatch, state, dispatchTwo }}>
        {children}
    </Context.Provider>
    
  )
}


export default ContextProvider;