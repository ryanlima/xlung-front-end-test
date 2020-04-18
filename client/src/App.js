import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
