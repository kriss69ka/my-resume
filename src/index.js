import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducer } from "./store/reducers/reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const storeEnchancer = composeEnhancers(applyMiddleware(thunk));

function configureStore(initialState) {
  const store = createStore(reducer, initialState, storeEnchancer);
  return store;
}

ReactDOM.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>,
  document.getElementById("root")
);
