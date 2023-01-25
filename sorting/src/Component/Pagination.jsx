import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({Nopage,setPage,page}) => {
 
    const handelpage=(des)=>{
if(des==="next"){
  setPage((prev)=>prev+1)
}else if(des==="prev"){
  setPage((prev)=>prev-1)
}
    }
  return (
    <Box width={["70%","50%","50%"]} height={"50px"} margin={"auto"} display={"flex"} justifyContent={"space-evenly"} mt={"20px"} mb={"20px"}>
      <Button colorScheme={"messenger"} onClick={()=>handelpage("next")} disabled={page===Nopage}>Next</Button>
      <Button colorScheme={"cyan"} color={"black.100"}>{page}</Button>
      <Button colorScheme={"messenger"} onClick={()=>handelpage("prev")} disabled={page===1}>Prev</Button>
    </Box>
  );
};

export default Pagination;
