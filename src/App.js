import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact render={(props) => <Home {...props} />} path="/" />
        <Route exact render={(props) => <Login {...props} />} path="/login" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
