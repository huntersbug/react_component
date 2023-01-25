import thunk from "redux-thunk";
import {reducer as Appreducer} from "./Appreducer/reducer"
import {reducer as Authreducer} from "./Authreducer/reducer"
import { legacy_createStore, combineReducers, applyMiddleware } from "redux"
const rootreducer=combineReducers({Appreducer,Authreducer})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export  default store