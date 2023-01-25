import { createContext } from "react";

export const Apicontext = createContext();

export const ApicontextProvider = ({ children }) => {
  return <Apicontext.Provider >{children}</Apicontext.Provider>;
};
