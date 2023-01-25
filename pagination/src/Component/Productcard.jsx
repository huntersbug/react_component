import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const Productcard = ({ title, description, price, rating, thumbnail }) => {
  return (
    <Box border={"1px solid red"} width={"100%"} textAlign={"center"} boxSizing={"border-box"}>
      <Image src={thumbnail} width={"100%"} height={"150px"} />
      <Text as={"b"} fontSize={"2xl"}>
        {title}
      </Text>
      <Text fontSize={"2xs"}>Description: {description}</Text>
      <Text>Price: {price}</Text>
      <Text as={"b"} fontSize={"s"}>
        Rating: {rating}
      </Text>
    </Box>
  );
};

export default Productcard;
