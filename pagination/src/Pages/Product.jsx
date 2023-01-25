import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../Component/Pagination";
import Productcard from "../Component/Productcard";
import { Getproduct } from "../Redux/Appreducer/action";
import { LogoutApi } from "../Redux/Authreducer/action";

const Product = () => {
  const userdata = useSelector((store) => store.Authreducer);
  const products = useSelector((store) => store.Appreducer.products.products);
  const [limit, setLimit] = React.useState(6);
  const [pageno, setPageno] = React.useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelpage = (description) => {
    if (description === "next") {
      setPageno((prev) => prev + 1);
    } else {
      setPageno((prev) => prev - 1);
    }
  };
  const handellogout = () => {
    if (userdata.isAuth) {
      dispatch(LogoutApi());
      navigate("/login");
      return;
    }
  };
  React.useEffect(() => {
    dispatch(Getproduct({ limit, pageno }));
  }, [pageno]);
  return (
    <Box width={"100%"}>
      <h2
        style={{
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "cursive",
          fontSize: "20px",
          color: "teal",
        }}
      >
        Token: {userdata.token}
      </h2>
      <Box textAlign={"center"}>
        <Button
          variant={"solid"}
          colorScheme={"linkedin"}
          onClick={handellogout}
        >
          Logout
        </Button>
      </Box>
      <Box width={"100%"} mt={"10px"}>
        <SimpleGrid columns={3} spacing={10}>
          {products?.map((e) => (
            <Productcard key={e.id} {...e} />
          ))}
        </SimpleGrid>
      </Box>
      <Pagination items={{ limit, pageno }} handelpage={handelpage} />
    </Box>
  );
};

export default Product;
