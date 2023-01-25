import * as types from "./actiontypes";

const GetProduct = () => async (dispatch) => {
  let data = await fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=100"
  );
  data = await data.json();

  dispatch({
    type: types.GET_PRODUCTS,
    payload: data.data,
  });
};

const sortdata = (data) => async (dispatch) => {
  dispatch({ type: types.SORT_PRODUCT, payload: data });
};
const filterfunc = (data) => async (dispatch) => {
  dispatch({ type: types.FILTER_PRODUCT, payload: data });
};
const singelproduct=(data)=>async(dispatch)=>{
  console.log(data);
  dispatch({type:types.ADD_CURRENT_PRODUCT,payload:data})
}
export { GetProduct, sortdata,filterfunc ,singelproduct};
