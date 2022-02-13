import { combineReducers } from "redux";
import auth from "./auth";
import restaurents from "./restaurent";
import shop from "./shop";

const rootReducer = combineReducers({ auth, restaurents, shop });

export default rootReducer;
