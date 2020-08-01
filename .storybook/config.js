import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "styles";

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);
