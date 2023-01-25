import React, { createContext } from "react";

export const Appcontext = createContext();
const init = { 
  item: [], 
  cart_item: [] 
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Get_Products":
      return { ...state, item: payload };
    case "Add_to_cart":
      return { ...state, cart_item:(payload) };
    default:
      return state;
  }
};

const ContextFunction = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, init);
  return (
    <Appcontext.Provider value={{ dispatch, state }}>
      {children}
    </Appcontext.Provider>
  );
};

export default ContextFunction;
