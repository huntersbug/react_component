import React from "react";
import {Routes,Route} from "react-router-dom"
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
};

export default Allroutes;
