import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import All from './all';
import Popular from './popular';
import Favored from './favor';
import Search from './search';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Notes</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/favored">Favored</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/favored">
            <Favored />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <All />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
