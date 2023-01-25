import axios from "axios";
import * as types from "./actiontypes";

const Getproduct = ({pageno,limit}) => (dispatch) => {

  dispatch({ type: types.Get_product_Req });
  axios
    .get(`https://dummyjson.com/products?limit=${limit}&skip=${(pageno*limit)}`)
    .then((r) => {

      return dispatch({ type: types.Get_product_suc, payload: r.data });
    })
    .catch((err) => {
      return dispatch({ type: types.Get_product_err });
    });
};

export { Getproduct };
