import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { Appreducer } from "./Appreducer";

const rootreducer = combineReducers({ Appreducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
