import axios from 'axios';
import React,{createContext, useContext, useEffect, useState} from 'react'
import {Quiz,initialQuizContext} from './QuizDataContext'


export const DataContext = createContext<Quiz>(initialQuizContext);
const DataContextProvider = ({children}: React.PropsWithChildren<{}>) =>{

    const [quizzes,setQuizes] = useState(initialQuizContext)
    useEffect(()=>{
        const getQuizData = async()=>{
        const quizeResponse = await axios.get('https://quiz-fun-app.herokuapp.com/quiz')
        setQuizes(quizeResponse.data.getQuizData)
        }
        getQuizData()
    },[])
    return (
        <DataContext.Provider value={quizzes} >
            {children}
        </DataContext.Provider>
    )
}
export const useDataContext = () =>{
    useContext(DataContext)
}

export default DataContextProvider
