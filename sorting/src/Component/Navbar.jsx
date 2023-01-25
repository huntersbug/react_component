import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      width={["100%", "100%"]}
      height={"50px"}
      backgroundColor={"#1c3334"}
      color="whatsapp.300"
      display={"flex"}
      justifyContent="space-evenly"
      lineHeight={"50px"}
    >
      <Link to="/">Home</Link>

      <Link to="/cart">Cart</Link>
      <Link to="/orders">Order</Link>
    </Box>
  );
};

export default Navbar;
