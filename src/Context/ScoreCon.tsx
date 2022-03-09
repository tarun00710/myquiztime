import React, {  createContext, useContext, useEffect, useReducer } from 'react'
import { quizType } from '../Types/context.types';
import { Action } from '../Types/reducers.types';
import { userSignInContext } from './SignInContext';



const contextInitialState = {
  quizResponse:{
    score:0,
    correct:0,
    incorrect:0,
    questionNo:1,
    totalQuestion:5,
    userData:{
      name:null,
      score:null,
      topic:null
    }
  },
  dispatch: () => null,
}

const reducerInitialState = {
  score:0,
  correct:0,
  incorrect:0,
  questionNo:1,
  totalQuestion:5,
  userData:{
    name:null,
    score:null,
    topic:null
  }
}



export const ScoreContext = createContext<quizType>(contextInitialState);

const scoreReducer = (state:typeof reducerInitialState ,action:Action) => {

  switch(action.type){
  case "CORRECT":{
    return {...state , score:state.score + action.payload , correct:state.correct+1}
  }
  case "INCORRECT":
    return {...state , score:state.score - action.payload , incorrect:state.incorrect+1} 
  case "INCREMENT_QUESTION":
    return {...state , questionNo:state.questionNo + 1}
  case "RESET":
    return {...state,questionNo:1,score:0,correct:0,incorrect:0}  
  case "USERINFO":{
    return {...state,userData:{
      ...state.userData,
      name:action.payload.name,
      score:action.payload.score,
      topic:action.payload.topic
    }} 
  }    
  default:
    return {...state}  
  }
}


const ScoreContextProvider = ({ children }: React.PropsWithChildren<{}>) => {

  const [quizResponse,dispatch] = useReducer(scoreReducer,reducerInitialState)
  const {userData} = useContext(userSignInContext)

  useEffect(() => {
    dispatch({ type: "USERINFO" , payload: userData})
} , [userData])

  
  return (
    <ScoreContext.Provider value={{quizResponse,dispatch}}>
        {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContextProvider