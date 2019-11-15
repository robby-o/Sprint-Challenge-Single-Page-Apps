import React from "react";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

import { Route, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <nav>
        <NavLink exact to="/">
          Welcome
        </NavLink>

        <NavLink to="/character-list">Character List</NavLink>
        <NavLink to="/location-list">Location List</NavLink>
        <NavLink to="/episode-list">Episode List</NavLink>
      </nav>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      <Route path="/location-list" component={LocationsList} />
      <Route path="/episode-list" component={EpisodeList} />
    </header>
  );
}
