import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notes from "./notes.js";

const store = combineReducers({ notes });

const composeEnhancers = composeWithDevTools({});

export default createStore(store, composeEnhancers());
