import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "pages/Login";
import Home from "pages/Home";
import Movies from "pages/Movies";
import Favorites from "pages/Favorites";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact render={(props) => <Home {...props} />} path="/" />
        <Route exact render={(props) => <Login {...props} />} path="/login" />
        <Route
          exact
          render={(props) => <Favorites {...props} />}
          path="/favorites"
        />
        <Route exact render={(props) => <Movies {...props} />} path="/movies" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
