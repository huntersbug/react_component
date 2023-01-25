import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutApi } from "../Redux/Authreducer/action";

const Logout = () => {
  const navigate = useNavigate();
  const userdata = useSelector((store) => store.Authreducer);
  const dispatch = useDispatch();

  const handellogout = () => {
    if (userdata.isAuth) {
      dispatch(LogoutApi());
      navigate("/login");
      return;
    }
  };
  return (
    <Box
      width={"100%"}
      border={"1px solid red"}
      height={"1200px"}
      position={"relative"}
      top={"50"}
      textAlign={"center"}
    >
      <h2 style={{ marginBottom: "20px" }}>Token: {userdata.token}</h2>
      <Button colorScheme="linkedin" onClick={handellogout}>
        {userdata.isAuth ? "LogOut" : "Login"}
      </Button>
    </Box>
  );
};

export default Logout;
