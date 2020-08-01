import React from "react";
import Button from "./";

export default {
  title: "Button",
  parameters: {
    backgrounds: [{ name: "twitter", value: "#0f142b", default: true }],
  },
};

export const withText = (): JSX.Element => <Button>Hello Button</Button>;
