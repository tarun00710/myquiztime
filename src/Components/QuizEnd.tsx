import React, { useContext } from 'react'
import img1 from '../Assets/quizTrophy.png'
import { ScoreContext } from '../Context/ScoreCon'
const QuizEnd = () => {

    const {quizResponse} = useContext(ScoreContext)

  return (
    <div className='flex flex-col justify-center items-center h-screen -mt-6'>
    <div className='flex flex-col'>
        <h1 className="text-xl bg-white-dark rounded">Hi ! User</h1>
        <p className='text-white mt-2'>Your total Score - {quizResponse.score} </p>
        <p className='text-green mt-2'>Answered Correctly = { quizResponse.correct } </p>
        <p className='text-red mt-2'>Answered Incorrectly = { quizResponse.incorrect } </p>
        <p className='text-white-dark mt-2'>Total Question - {quizResponse.totalQuestion}</p>
    </div>
        <img className="h-40 mt-4" src={img1} alt="img"/>
    </div>
  )
}

export default QuizEnd