import React,{ useContext } from 'react'
import {ScoreContext} from '../Context/ScoreCon'

const UserInfo = () => {
    const { quizResponse } = useContext(ScoreContext)
    const {name,score,topic} = quizResponse.userData;
  console.log(quizResponse)
    return (
      <>
         <div className='h-screen'>
           <div className='flex flex-col items-center justify-center h-screen bg-orange bg-opacity-30'>
              <p className='text-2xl text-white'>Player Name : <span className='text-orange'>{name}</span></p>
              <p className='text-2xl text-white'>Last Played :  <span className='text-orange'>{topic}</span></p>
              <p className='text-2xl text-white'>Previously Scored :  <span className='text-orange'>{score}</span></p>
            </div>
         </div>   
      </>
    
  )
}

export default UserInfo