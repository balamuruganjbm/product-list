import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import headerReducer from "./headerReducer";

export default combineReducers({ header: headerReducer, items: itemsReducer });
