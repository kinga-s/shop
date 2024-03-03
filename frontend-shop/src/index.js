import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

ReactDOM.render(
  // Providing the Redux store to all components using the Provider component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
