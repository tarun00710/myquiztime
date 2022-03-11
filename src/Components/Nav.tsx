import  { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ScoreContext } from "../Context/ScoreCon";
import { userSignInContext } from "../Context/SignInContext";

const Nav = () => {
  const { quizResponse } = useContext(ScoreContext);
  const { token, setToken } = useContext(userSignInContext);
  const navigate =  useNavigate()

  const logoutHandler = async () => {
    try{
    setToken(null)
    localStorage.removeItem('token')
    navigate('/')
    toast.success("Successfully logged out")
    }catch(err){
      console.log(err)
    }
  };

  return (
    <nav className="flex justify-between sticky px-2 py-2 top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-200">
      <div className="">
        <NavLink to={"/"} className="text-white font-bold">
          Home
        </NavLink>
      </div>
      
      <div className="flex justify-between space-x-4 font-semibold"> 
      {!token ?
       <div>
            <NavLink to={"/Signup"} className="text-orange pr-3">
              SignUp
            </NavLink>
            <NavLink to={"/Login"} className="text-orange">
              Login
            </NavLink>
        </div> :   
          <div onClick={() => logoutHandler()} className="text-red cursor-pointer">
            Logout
          </div>
}
        <NavLink to={"/User"} className="text-orange">
          {token ? quizResponse.userData.name : "User"}
        </NavLink>
        </div>
    </nav>
  );
};

export default Nav;
