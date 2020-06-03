import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GraphQLConnect from "./GraphQLConfig";
import { GlobalStyle } from "styles";
import { StoreProvider } from "hooks/useAppStore";

ReactDOM.render(
  <GraphQLConnect>
    <StoreProvider>
      <GlobalStyle />
      <App />
    </StoreProvider>
  </GraphQLConnect>,
  document.getElementById("root")
);
