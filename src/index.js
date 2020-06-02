import React from "react";
import ReactDOM from "react-dom";
import allReducers from "./reducers";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(allReducers);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
