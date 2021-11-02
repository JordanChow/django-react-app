import { combineReducers } from "redux";
import userReducer from "./users";
import albumReducer from "./albums";

const rootReducer = combineReducers({
    userReducer,
    albumReducer
});

export default rootReducer;
