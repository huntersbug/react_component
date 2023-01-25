import { useContext, useState } from "react";

import "./App.css";
import { Apicontext } from "./Context/Contextapi";
import Ready from "./CustomHooks/Ready";
import useFetch from "./CustomHooks/useFetch";
import useTimeout from "./CustomHooks/useTimeout";

// import Todo from "./Components/Todo";

function App() {
  // const Api = useContext(Apicontext);
  // console.log(Api);
const data=useFetch("https://jsonplaceholder.typicode.com/todos")
// console.log(data);
  const {ready}=useTimeout()
  return (
    <div className="App">
    {ready?  "App is ready" : "App is loading...."}
      {/* <Todo/> */}
     <Ready/> 
    </div>
  );
}

export default App;
