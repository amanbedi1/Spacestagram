import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ErrorProvider } from "./Context/Error/Error";

ReactDOM.render(
  <ErrorProvider>
    <App />
  </ErrorProvider>,
  document.getElementById("root")
);
