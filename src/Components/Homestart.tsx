import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { userSignInContext } from '../Context/SignInContext'

const Homestart = () => {
    const {token} = useContext(userSignInContext)
  return (
      <div className='bg-quizNight h-screen bg-cover bg-no-repeat bg-center opacity-80 flex justify-center align-items -mt-5'>
      <div className='mt-16'>
         <NavLink to={token ? '/Home' : '/login'}><button className='bg-orange p-3 rounded text-lg mt-16    text-white'>Lets Go ➡</button></NavLink>
      </div>
      </div>
   
  )
}

export default Homestart