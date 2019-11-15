import React from "react";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";

import { Route, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <NavLink exact to="/">
        Welcome
      </NavLink>

      <NavLink to="/characterlist">Character List</NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
    </header>
  );
}
