import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  favoriti: wishlistReducer
});

export default rootReducer;
