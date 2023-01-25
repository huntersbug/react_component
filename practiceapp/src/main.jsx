import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApicontextProvider } from "./Context/Contextapi";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ApicontextProvider> */}
      <App />
    {/* </ApicontextProvider> */}
  </React.StrictMode>
);
