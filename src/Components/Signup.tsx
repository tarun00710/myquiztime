import axios from "axios";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [userInfo,setUserInfo] = useState({name:"",email:"",password:""})
  const navigate = useNavigate()
  const onChangeHandler = (e:any) => {
    const {name,value} =  e.target
    if(name === "email")
      setUserInfo({...userInfo,email:value})
    else if(name==="name")  
      setUserInfo({...userInfo,name:value})
    else
      setUserInfo({...userInfo,password:value})  
  }
  
  const onSignupHandler = async(e:any) => {

   try {
     
    e.preventDefault()
    const {name,email,password} = userInfo
    const response = await axios.post('https://quiz-fun-app.herokuapp.com/user/register',{name,email,password})
    if(response.status === 422)
      toast.error('something went wrong')
    else{  
      navigate('/login')
      toast("Successfully Signed up")
      setUserInfo({name:"",email:"",password:""})
    }
   } catch (error) {
    console.log(error)
   }
  } 
  

  return (
    <div className="flex justify-center items-center h-screen -mt-10">
      <form className="bg-gray-light shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label className="block text-orange text-sm font-bold mb-2">
            Username
          </label>
          <input
           onChange={(e)=>onChangeHandler(e)}
           name="name"
            className="shadow bg-gray-darkest appearance-none rounded w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={userInfo.name}
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-orange text-sm font-bold mb-2">
            Email
          </label>
          <input
           onChange={(e)=>onChangeHandler(e)}
           name="email"
            className="shadow bg-gray-darkest appearance-none rounded w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
            value={userInfo.email}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block text-orange text-sm font-bold mb-2">
            Password
          </label>
          <input
           onChange={(e)=>onChangeHandler(e)}
            className="shadow bg-gray-darkest appearance-none rounded w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={userInfo.password}
          ></input>
          <p className="text-green text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => onSignupHandler(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-orange"
            type="button"
          >
            Submit
          </button>
          <div className="flex flex-col justify-between text-white">
            <p className="text-xs">Already a User?</p>
            <Link to={'/Login'}>
              <button
                className="text-orange hover:text-white font-bold "
                type="button"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
