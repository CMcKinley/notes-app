import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import notes from "./notes.js";

const store = combineReducers({ notes });

const composeEnhancers = composeWithDevTools({});

export default createStore(store, composeEnhancers(applyMiddleware(thunk)));
