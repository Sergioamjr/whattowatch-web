import React from "react";
import { Button } from "@storybook/react/demo";

export default { title: "Button" };

export const withText = (): JSX.Element => <Button>Hello Button</Button>;

export const withEmoji = (): JSX.Element => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
