import styled, { createGlobalStyle } from "styled-components";

export * from "./theme";
export * from "./grid";

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
    font-family: 'Noto Sans', sans-serif;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  a, button {
    cursor: pointer;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    font-size: 18px;
    overflow: hidden;
  }
`;
