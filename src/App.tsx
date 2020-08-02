import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "pages/Login";
import Movies from "pages/Movies";
import Favorites from "pages/Favorites";
import Lists from "pages/Lists";
import Authentication from "components/Authentication";
import Genres from "pages/Genrer";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact render={(props) => <Movies {...props} />} path="/" />
        <Route exact render={(props) => <Login {...props} />} path="/login" />
        <Route
          exact
          render={(props) => (
            <Authentication>
              <Favorites {...props} />
            </Authentication>
          )}
          path="/favoritos"
        />
        <Route
          exact
          render={(props) => (
            <Authentication>
              <Lists {...props} />
            </Authentication>
          )}
          path="/listas"
        />
        <Route
          exact
          render={(props) => <Genres {...props} />}
          path="/genero/:slug"
        />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
