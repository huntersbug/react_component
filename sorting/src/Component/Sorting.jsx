import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterfunc, sortdata } from "../Redux/action";

const Sorting = () => {
  let products = useSelector((store) => store.Appreducer.products);
  let filterdata = useSelector((store) => store.Appreducer.filterdata);
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    let query = e.target.value;
    let sorted = products.filter((e) => {
      return e.category === query;
    });
   
    dispatch(filterfunc(sorted));
  };

  const handleSort = (e) => {
    let query = e.target.value;

    if (query == "lth") {
      filterdata.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      filterdata.sort((a, b) => {
        return b.price - a.price;
      });
    }
    let sortedarray = [...filterdata];
    dispatch(sortdata(sortedarray));
  };
  return (
    <Box
      width={["100%", "90%", "80%"]}
      margin={"auto"}
      border={"1px solid teal"}
      height={["150px", "50px"]}
      mt={"20px"}
      mb={"20px"}
      display={"flex"}
      flexDirection={["column", "row"]}
      justifyContent={"space-evenly"}
    >
      <Select placeholder="Sort on Category" onChange={handleFilter}>
        <option value="kids">kids</option>
        <option value="women">women</option>
        <option value="homedecor">homedecor </option>
      </Select>

      <Select placeholder="Price sorting" onChange={handleSort}>
        <option value="lth">Low to High</option>
        <option value="htl">High to Low</option>
      </Select>
    </Box>
  );
};

export default Sorting;
