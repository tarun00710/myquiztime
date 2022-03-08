import React, { useContext } from "react";
import { Navigate, Route, useParams} from "react-router-dom";
import { userSignInContext } from "../Context/SignInContext";

type propsType = {
  path: any | string;
  element: any;
};

const PrivateRoute = (props: propsType) => {
  const { token } = useContext(userSignInContext);
  const {topic} = useParams()
  console.log(topic)
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
