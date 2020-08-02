import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import All from './all';
import Popular from './popular';
import Favored from './favor';
import Search from './search';

export default function App() {
  return (
      <div className="container">
        <div className="header">
          <nav className="nav">
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
        </div>

        <div className="content">
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
        <div className="footer">
        </div>
      </div>
  );
}
