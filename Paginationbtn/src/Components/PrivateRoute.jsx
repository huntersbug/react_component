import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const Auth = useContext(AuthContext);

  if (!Auth.authState.isAuth) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
}

export default PrivateRoute;
