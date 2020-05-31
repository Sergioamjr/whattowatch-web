import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GraphQLConnect from "./GraphQLConfig";

ReactDOM.render(
  <GraphQLConnect>
    <App />
  </GraphQLConnect>,
  document.getElementById("root")
);
