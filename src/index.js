import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initStore from "./store/index";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <Provider store={initStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
