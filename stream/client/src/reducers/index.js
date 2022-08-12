import {combineReducers} from "redux";
import authReducer from "./authReducer";
import streamReducers from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    streams: streamReducers
});