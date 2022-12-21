import { combineReducers } from "redux";
import counter from "./counter";
import token from "./token";

const rootReducer = combineReducers({
  counter,
  token,
});

export default rootReducer;
