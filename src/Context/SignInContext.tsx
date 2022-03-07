import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";



const initialContext = {
    token: "",
    userData:{},
    setToken:() => null,
    LogIn : () => 0
}

export type LogInType = {
    token:any;
    userData:object;
    setToken: React.Dispatch<React.SetStateAction<null>>;
    LogIn:(e:any,email:any,password:any,setUserInfo:React.Dispatch<React.SetStateAction<{
      email: string;
      password: string;
  }>>) => Promise<number> | number
}

export const userSignInContext = createContext<LogInType>(initialContext);
const SignInContext = ({ children }: React.PropsWithChildren<{}>) => {
  
  const [token,setToken] = useState(null)
  const [userData,setUserData] = useState({})
  const navigate = useNavigate()
  const {state} = useLocation()

  const LogIn = async (e:any,email:any,password:any,setUserInfo:any) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://quiz-fun-app.herokuapp.com/user/login", {
        email,
        password,
      });
      if(response.status === 200){
        setToken(response.data.token)
        setUserData(response.data.userExist)
        
        localStorage.setItem("token",response.data.token)
        navigate(state?.from ? state.from : "/" )
      }
      if(response.status === 422 || !userData){
        alert('Invalid login')
      }
        setUserInfo({email:"",password:""})

    } catch (err: any) {
      console.log(err.message);
    }
    return 0
  };


  return (
    <userSignInContext.Provider value={{ LogIn ,token:localStorage.getItem("token"),userData,setToken}}>
      {children}
    </userSignInContext.Provider>
  );
};

export default SignInContext;
