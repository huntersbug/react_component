import axios from "axios";
import * as types from "./actiontypes";

const LoginApi = (payload) => (dispatch) => {
  dispatch({ type: types.Get_req });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((r) => {
      return dispatch({ type: types.Get_suc, payload: r.data.token });
    })
    .catch((err) => {
      return dispatch({ type: types.Get_err });
    });
};

const LogoutApi = (payload) => (dispatch) => {
  dispatch({ type: "Logout_suc" });
};
export { LoginApi ,LogoutApi};
