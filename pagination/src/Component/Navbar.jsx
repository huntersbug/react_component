import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userdata = useSelector((store) => store.Authreducer);
  return (
    <Box
      width={"100%"}
      bgColor={"black"}
      height={"40px"}
      textAlign={"center"}
      color={"white"}
      justifyContent={"space-evenly"}
      display={"flex"}
      lineHeight={"40px"}
      position={"sticky"}
      top={"0"}
      overflow={"hidden"}
      zIndex={1}
    >
      <Link to={"/"}>Home</Link>
      <Link to={userdata.isAuth ? "/logout" : "/login"}>
        {userdata.isAuth ? "logout" : "login"}
      </Link>
      {userdata.isAuth ? <Link to={"/product"}>Product</Link> : ""}
    </Box>
  );
};

export default Navbar;
