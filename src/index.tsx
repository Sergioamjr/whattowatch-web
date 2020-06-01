import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GraphQLConnect from "./GraphQLConfig";
import { GlobalStyle } from "styles";

ReactDOM.render(
  <GraphQLConnect>
    <GlobalStyle />
    <App />
  </GraphQLConnect>,
  document.getElementById("root")
);
