import * as types from "./actiontypes";
const init = {
  products: [],
  cart: [],
  order: [],
  filterdata: [],
};

const Appreducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS:
      return { ...state, filterdata: payload, products: payload };
      case types.SORT_PRODUCT:
        return { ...state, filterdata: payload,};
        case types.FILTER_PRODUCT:
          return { ...state, filterdata: payload,};
          case types.ADD_CURRENT_PRODUCT:
            return { ...state, cart: payload,};
    default:
      return state;
  }
};

export { Appreducer };
