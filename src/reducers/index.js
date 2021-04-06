import authReducer from "./auth";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({ auth: authReducer });

export default combinedReducers;
