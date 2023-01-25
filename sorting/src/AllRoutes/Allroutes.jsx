import React from "react";

import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Order from "../Pages/Order";
import Product from "../Pages/Product";
import Productedit from "../Pages/Productedit";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />}></Route>
      <Route path="/product/:id" element={<Productedit />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orders" element={<Order />}></Route>
    </Routes>
  );
};

export default Allroutes;
