import './App.css';
import React from 'react';
import {Home} from "./Components/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import QuizGame from './Components/Quiz'
const App = () => {
  return(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="quiz/:topic" element={<QuizGame/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
