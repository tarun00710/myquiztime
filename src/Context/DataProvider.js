import React,{createContext, useContext} from 'react'
import {quizzes} from '../data'

export const DataContext = createContext();
const DataContextProvider = ({children}) =>{
   
    return (
        <DataContext.Provider value={{quizzes}}>
            {children}
        </DataContext.Provider>
    )
}
export const useDataContext = () =>{
    useContext(DataContext)
}

export default DataContextProvider
