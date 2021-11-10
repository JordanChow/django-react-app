import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };
