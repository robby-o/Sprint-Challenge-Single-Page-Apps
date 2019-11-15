import React, { useState } from "react";
import ElementCard from "./ElementCard";
import styled from "styled-components";

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

export default function SearchForm({ data, match }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? data
    : data.filter(
        element =>
          element.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          (match.path === "/location" &&
            element.type
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (match.path === "/location" &&
            element.dimension
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (match.path === "/episode" &&
            element.air_date
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (match.path === "/episode" &&
            element.episode
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()))
      );

  return (
    <section className="search-form">
      <StyledInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      {match.path === "/character" &&
        results.map(character => {
          return (
            <ElementCard key={character.id} data={character} match={match} />
          );
        })}

      {match.path === "/location" &&
        results.map(location => {
          return (
            <ElementCard key={location.id} data={location} match={match} />
          );
        })}

      {match.path === "/episode" &&
        results.map(episode => {
          return <ElementCard key={episode.id} data={episode} match={match} />;
        })}
    </section>
  );
}
