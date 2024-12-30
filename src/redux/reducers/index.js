import countReducer from "./counter";
import isLoggedReducer from "./isLogged";
import authReducer from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: countReducer,
  logged: isLoggedReducer,
  auth: authReducer,
});

export default allReducers;
