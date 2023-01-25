import { Box, Button, Image, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import { GetProduct } from "../Redux/action";
import { Link } from "react-router-dom";
import Sorting from "../Component/Sorting";
import Pagination from "../Component/Pagination";
const Product = () => {
  const productdata = useSelector((store) => store.Appreducer.products);
  const filteredData = useSelector((store) => store.Appreducer.filterdata);
  
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const Limit = 8;
  const total = filteredData.length;
  const Nopage = Math.ceil(total / Limit);
  const end = page * Limit;
  const start = end - Limit;
  const filterdata = filteredData.slice(start, end);

  React.useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  return (
    <Box width={["100%", "90%", "80%"]} margin={"auto"} height={"auto"}>
      <Sorting />
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {filterdata&&filterdata?.map((e) => (
          <Link to={`/product/${e.id}`} key={e.id}>
            <Card key={e.id} products={e} />
          </Link>
        ))}
      </SimpleGrid>

      <Pagination Nopage={Nopage} setPage={setPage} page={page}></Pagination>
    </Box>
  );
};

export default Product;
