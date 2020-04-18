import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./routes";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>Header</h1>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
