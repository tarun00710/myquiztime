
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userSignInContext } from "../Context/SignInContext";



const Login = () => {



  const [userInfo, setUserInfo] = useState({ email: "", password: "" });


  const {LogIn} = useContext(userSignInContext)




  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") setUserInfo({ ...userInfo, email: value });
    else setUserInfo({ ...userInfo, password: value });
  };

  

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-light">
      <form
        className="bg-gray-darkest shadow-s rounded px-8 pt-6 pb-8 mb-4"
        method="#"
      >
        <div className="mb-4">
          <label className="block text-orange text-sm font-bold mb-2">
            Email
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className="shadow border-none outline-none bg-gray-light appearance-none border rounded w-full py-2 px-3 text-white leading-tight border-"
            id="username"
            name="email"
            type="text"
            value={userInfo.email}
            placeholder="Email"
          ></input>
        </div>
        <div className="mb-6">
          <label className="block text-orange text-sm font-bold mb-2">
            Password
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className="shadow border-none outline-none bg-gray-light appearance-none border rounded w-full py-2 px-3 text-white  leading-tight"
            id="password"
            name="password"
            type="password"
            value={userInfo.password}
            placeholder="*********"
          ></input>
        </div>
        <div className="flex items-center justify-between flex-col">
          <button
            className=" text-orange font-bold hover:text-white"
            type="submit"
            onClick={(e) => LogIn(e,userInfo.email,userInfo.password,setUserInfo)}
          >
            Log In
          </button>
          <div className="flex justify-between items-center">
            <Link to={"/Signup"}>
              <button
                className=" text-white-dark hover:text-white mr-5 font-bold py-2 px-4"
                type="button"
              >
                Sign up
              </button>
            </Link>
            <a
              className=" font-semibold text-xs  text-white-dark hover:text-white"
              href="null"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
