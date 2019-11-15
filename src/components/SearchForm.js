import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";
import styled from "styled-components";
import EpisodeCard from "./EpisodeCard";

const StyledInput = styled.input`
  width: 100%;
  background-color: snow;
  display: flex;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  border-radius: 4px;
  font-weight: bold;
  color: DarkSlateGrey;
  padding: 2% 0;
  margin-top: 2%;
`;

export default function SearchForm({ characters, locations, episodes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  if (characters) {
    const results = !searchTerm
      ? characters
      : characters.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    return (
      <section className="search-form">
        <StyledInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        {results.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </section>
    );
  }

  if (locations) {
    const results = !searchTerm
      ? locations
      : locations.filter(location =>
          location.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    return (
      <section className="search-form">
        <StyledInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        {results.map(location => {
          return (
            <LocationCard
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
            />
          );
        })}
      </section>
    );
  }

  if (episodes) {
    const results = !searchTerm
      ? episodes
      : episodes.filter(episode =>
          episode.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    return (
      <section className="search-form">
        <StyledInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        {results.map(episode => {
          return (
            <EpisodeCard
              key={episode.id}
              name={episode.name}
              airDate={episode.air_date}
              episode={episode.episode}
            />
          );
        })}
      </section>
    );
  }
}
