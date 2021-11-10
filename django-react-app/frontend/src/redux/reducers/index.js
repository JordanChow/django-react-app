import { combineReducers } from "redux";
import userReducer from "./users";
import albumReducer from "./albums";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'userReducer',
        'albumReducer'
    ]
} 

const rootReducer = combineReducers({
    userReducer,
    albumReducer
});

export default persistReducer(persistConfig, rootReducer);
