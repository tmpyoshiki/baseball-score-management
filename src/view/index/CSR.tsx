import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import IndexMainComponent from "./component/IndexMainComponent";
import reducers from "./stores/index";

const composeEnhancers =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const root = document.getElementById("app");
const renderMethod = root && root.innerHTML === "" ? render : hydrate;

renderMethod(
  <Provider store={store}>
    <IndexMainComponent />
  </Provider>,
  root
);
