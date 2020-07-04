import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
// reducer
import gnomesReducer from "./reducers/Gnomes";

const rootReducer = combineReducers({
  gnomes: gnomesReducer,
});

const initStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default initStore;
