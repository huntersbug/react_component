import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authState, setauthState] = React.useState({ isAuth: false, token: null });
  const loginUser = (token) => {
    setauthState({ ...authState, isAuth: true, token: token });
   
  };
  const logoutUser  = () => {
    setauthState({ ...authState, isAuth: false, token: null });
   
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser  }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
