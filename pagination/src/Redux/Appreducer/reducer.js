const init = {
  products: [],
  isLoading: false,
  isError: false,
};
import * as types from "./actiontypes";
const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case types.Get_product_Req:
      return { ...state, isLoading: true };
    case types.Get_product_suc:
      return { ...state, isLoading: false, products: payload };
    case types.Get_product_err:
      return { ...state, isError: true };
    default:
      return state;
  }
};

export { reducer };
