import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { userSignInContext } from '../Context/SignInContext'

const Homestart = () => {
    const {token} = useContext(userSignInContext)
  return (
      <div className='bg-homeQuiz h-screen bg-cover bg-no-repeat bg-center opacity-80 flex justify-center align-items m-auto'>
      <div className=''>
         <NavLink to={token ? '/Home' : '/login'}><button className='bg-orange p-2 rounded text-lg m-12'>Lets Go</button></NavLink>
      </div>
      </div>
   
  )
}

export default Homestart