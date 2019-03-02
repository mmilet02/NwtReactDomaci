import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers.js";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
