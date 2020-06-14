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
import Lists from "pages/Lists";
import Authentication from "components/Authentication";
import SingleMovie from "pages/SingleMovie";
import Genres from "pages/Genrer";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact render={(props) => <Home {...props} />} path="/" />
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

        <Route exact render={(props) => <Movies {...props} />} path="/filmes" />
        <Route
          exact
          render={(props) => <SingleMovie {...props} />}
          path="/filmes/:id"
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
