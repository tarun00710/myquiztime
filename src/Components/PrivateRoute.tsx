import React, { useContext } from "react";
import { Navigate, Route} from "react-router-dom";
import { userSignInContext } from "../Context/SignInContext";

type propsType = {
  path: any | string;
  element: any;
};

const PrivateRoute = (props: propsType) => {
  const { token } = useContext(userSignInContext);
  return (
    <>
      {token ? <Route {...props} path={`/`} />
     
       : ( 
        <Navigate state={{ from: props.path }} replace to="/Login" />
      )}
    </>
  );
};

export default PrivateRoute;
