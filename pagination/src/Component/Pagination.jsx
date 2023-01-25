import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ items ,handelpage}) => {
  const { limit, pageno } = items;

  return (
    <Box
      width={"50%"}
      margin={"auto"}
      mt={"50px"}
      textAlign={"center"}
      mb={"50px"}
    >
      <Button ml={"10px"} colorScheme={"cyan"} onClick={()=>handelpage("prev")} disabled={pageno<1}>
        Prev
      </Button>
      <Button ml={"10px"} colorScheme={"cyan"}>
        {pageno+1}
      </Button>
      <Button ml={"10px"} colorScheme={"cyan"} onClick={()=>handelpage("next")}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
