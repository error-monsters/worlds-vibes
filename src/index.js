
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

// import "./styles.css";

const AppJsx = (
  <HashRouter>
    <App />
  </HashRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(AppJsx, rootElement);

