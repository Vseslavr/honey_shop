import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import shopReducer from "./shop/reduser";

let reducers = combineReducers({
  shopPage: shopReducer,
});

let store = createStore(reducers, devToolsEnhancer());

export default store;
