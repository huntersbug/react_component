import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import Protected from "../Component/Protected";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Product from "../Pages/Product";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/logout" element={<Logout></Logout>}></Route>
      <Route
        path="/product"
        element={
           <Protected>
            <Product></Product>
           </Protected>
        }
      ></Route>
    </Routes>
  );
};

export default Allroutes;
