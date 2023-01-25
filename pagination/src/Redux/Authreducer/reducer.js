const init = { isLoading: false, isError: false, isAuth: false, token: null };
import * as types from "./actiontypes";

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.Get_req:
      return { ...state, isLoading: true };
    case types.Get_suc:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case types.Get_err:
      return { ...state, isError: true };
      case "Logout_suc":
        return { ...state, isAuth:false,token:null };
    default:
      return state;
  }
};

export { reducer };
