import { createStore } from "redux";
import userReducer from "../reducers/users/index.js";

const store = createStore(userReducer);

export default store;