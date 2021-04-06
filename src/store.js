import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./reducers";

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
