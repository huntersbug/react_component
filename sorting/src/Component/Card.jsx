import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({products}) => {

 
  return (
    <>
     
        <Box
          border={"1px solid teal"}
          mt={"20px"}
          boxSizing={"border-box"}
          textAlign={"center"}
          boxShadow={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          borderRadius={"20px"}
   
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
          <Button colorScheme={"messenger"} size={"sm"} borderRadius={"15px"}>Add to Cart</Button>
        </Box>
 
    </>
  );
};

export default Card;
