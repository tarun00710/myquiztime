
import { Home } from "./Components/Home";
import {  Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Nav from "./Components/Nav";
import QuizEnd from "./Components/QuizEnd";
import PrivateRoute from "./Components/PrivateRoute";
import UserInfo from "./Components/UserInfo";
import { useContext, useEffect } from "react";
import axios from "axios";
import { ScoreContext } from "./Context/ScoreCon";
import QuizGame from "./Components/Quiz";
import Homestart from "./Components/Homestart";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {dispatch} = useContext(ScoreContext)

  useEffect(()=>{
     const reload = async() =>{
       try{
          const response = await axios.post('https://quiz-fun-app.herokuapp.com/user/userInfo',{ headers: { authorization:localStorage.getItem('token') }
        })
        if(response.status === 200)
          dispatch({ type  : "USERINFO" , payload: response.data.userData})
       
       }catch(err){
         console.log(err)
       }
     }
     if(localStorage.getItem('token'))
     reload()
  })

  
  return (
      <>
        <Nav />
        <div className="bg-gray-darkest">
        <ToastContainer theme="dark" autoClose={2000} />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route 
              path="Home/quiz/:topic"
              element={<QuizGame/>}/>
               <Route
              path="/"
              element={<Homestart/>} />
             <PrivateRoute
              path="/User"
              element={<UserInfo/>} />
            <Route path="/quizEnd" element={<QuizEnd />} />
          </Routes>
        </div>
      </>
  );
};
export default App;
