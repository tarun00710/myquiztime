import React,{useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from "../Context/DataProvider"
import { Quizzes, Quiz , Options } from '../data';


const QuizGame = () => {

    const {quizzes} = useContext(DataContext)
    const {topic} = useParams();
    const [question,setQuestion] = useState(0);
    const [disable,setdisable] = useState({
        next: false,
        prev: false
    })
   

    const quizData:Quiz = quizzes.filter((ele:Quizzes) => {
        return ele.topic === topic
    })
   
    const questionHandler = (e:any) => {
        console.log(e.target.className)
        if(e.target.name === "next"){
            if(question < 4){
            setQuestion(question + 1)
             }else{
            setdisable({
                next: true,
                prev: false
            })
            }
        }else{
            if(question > 0)
                setQuestion(question-1)
            else
            setdisable({
                next: false,
                prev: true
            })
        }    
    }

    const optionHandler = (e:any,option:Options) => {
        if(option.isRight === false){
            e.target.classList.add("bg-red")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-full mt-10">
            <div className ="text-white m-3">
                {
                    quizData[0].questions[question].question
                }
            </div>
            <div className ="flex flex-col w-1/2">
                {
                    quizData[0].questions[question].options.map((option) =>
                    <>
                        <ul>
                            <li><button
                            onClick={(e)=>optionHandler(e,option)} className="bg-gray-light text-white min-w-full mt-3 rounded-md">{option.option}</button></li>
                        </ul>
                    </>
                    )
                }
            </div>
            <div className="flex flex-row justify-between w-1/2 items-center">
                <button name="prev" disabled={disable.prev} onClick={(e)=> questionHandler(e)} className="btn bg-orange text-white px-4 py-2 font-bold bg disabled:opacity-50 rounded-2xl mt-3 ml-2">Prev</button>
                <h2 className="text-orange">Score :</h2>
                <button name="next" disabled={disable.next} onClick={(e) => questionHandler(e)} className="btn bg-orange text-white px-4 py-2 font-bold bg disabled:opacity-50 rounded-2xl mt-3 mr-2">Next</button>
            </div>
        </div>    
    )
}

export default QuizGame
 