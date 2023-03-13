import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "./components/Firebase/Config";
import { FirebaseContext } from "./components/Context/FirebaseContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context/FirebaseContext";

import { Provider } from "react-redux";
import { store } from "./components/Redux/store";
import Post from "./components/Context/postContext";

import {getTotals } from "./components/Redux/Cart";

store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase }}>
        <Context>
          <Provider store={store}>
          
            <App />
           
          </Provider>
        </Context>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
