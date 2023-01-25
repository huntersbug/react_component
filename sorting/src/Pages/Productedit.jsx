import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { GetProduct, singelproduct } from "../Redux/action";

const Productedit = () => {
  let products = useSelector((store) => store.Appreducer.products);
  let cart = useSelector((store) => store.Appreducer.filterdata);
const navigate=useNavigate()
  const { id } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (products.length == 0) {
      dispatch(GetProduct());
    }
  }, []);
  const handelcart = () => {
    let cart_item = cart.filter((e) => {
      if (Number(e.id) === Number(id)) {
        return e;
      }
    });
    
    dispatch(singelproduct(cart_item));
    navigate("/cart")
  };
  return (
    <Box
      width={["60%", "60%", "50%"]}
      height={"auto"}
      margin={"auto"}
      mt={"50px"}
    >
      {products
        ?.filter((ele) => Number(ele.id) === Number(id))
        .map((products) => (
          <Box
            border={"1px solid teal"}
            mt={"20px"}
            boxSizing={"border-box"}
            textAlign={"center"}
            boxShadow={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            borderRadius={"20px"}
            key={id}
          >
            <Image
              src={products.image}
              width={["600px", "450px", "100%"]}
              borderRadius={"20px"}
              height={"200px"}
            />

            <Text
              fontFamily={"serif"}
              as="mark"
              fontSize={"large"}
              fontWeight={"500"}
            >
              {products.brand}
            </Text>
            <h1 style={{ fontSize: "larger", fontStyle: "italic" }}>
              {" "}
              {products.category}
            </h1>
            <p>{products.title}</p>
            <Text as="b" display={"block"}>
              {products.price}
            </Text>
            <Button
              colorScheme={"messenger"}
              size={"sm"}
              borderRadius={"15px"}
              onClick={handelcart}
            >
              Add to Cart
            </Button>
          </Box>
        ))}
    </Box>
  );
};

export default Productedit;
