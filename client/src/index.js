import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router baseName="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
