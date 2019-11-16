import React from "react";
import WelcomePage from "./WelcomePage";
import ElementList from "./ElementList";

import { Route, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <nav>
        <NavLink exact to="/">
          Welcome
        </NavLink>

        <NavLink to="/character">Character List</NavLink>
        <NavLink to="/location">Location List</NavLink>
        <NavLink to="/episode">Episode List</NavLink>
      </nav>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" render={props => <ElementList {...props} />} />
      <Route path="/location" render={props => <ElementList {...props} />} />
      <Route path="/episode" render={props => <ElementList {...props} />} />
    </header>
  );
}
