import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { LoginApi } from "../Redux/Authreducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = React.useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handelchange = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  const handelsubmit = () => {
    dispatch(LoginApi(userdata)).then((r) => {
     
      if (r.type === "Get_suc") {
        alert("Login sucess");
        navigate("/product");
      } else {
        alert("something went wrong");
        setUserdata({ email: "", password: "" });
      }
    });
  };
  return (
    <Box width={"100%"} border={"1px solid red"} height={"1200px"}>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={handelchange}
                  name="email"
                  value={userdata.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={handelchange}
                  name="password"
                  value={userdata.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handelsubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
