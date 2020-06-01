import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
    font-family: 'Noto Sans', sans-serif;
    list-style-type: none;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  a, button {
    cursor: pointer;
  }

  html, body, #app, .template {
    height: 100%;
  }
`;
