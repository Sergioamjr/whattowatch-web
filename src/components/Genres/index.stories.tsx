import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Genres from ".";

export default {
  title: "Genres",
  parameters: {
    backgrounds: [{ name: "twitter", value: "#0f142b", default: true }],
  },
};

export const genres = (): JSX.Element => (
  <Router>
    <Genres actived={0} />
  </Router>
);
