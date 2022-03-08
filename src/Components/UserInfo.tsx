import React,{ useContext } from 'react'
import {ScoreContext} from '../Context/ScoreCon'

const UserInfo = () => {
    const { quizResponse } = useContext(ScoreContext)
    const {name,score,topic} = quizResponse.userData;
  console.log(quizResponse)
    return (
      <>
         <div className=' bg-white h-screen flex flex-col items-center justify-center'>
            <div className='text-xl'>Player Name : <span className='text-orange'>{name}</span></div>
            <div className='text-xl'>Previously Played :  <span className='text-orange'>{topic}</span></div>
            <div className='text-xl'>Previously Scored :  <span className='text-orange'>{score}</span></div>
         </div>   
      </>
    
  )
}

export default UserInfo