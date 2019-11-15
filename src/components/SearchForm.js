import React, { useState } from "react";
import ElementCard from "./ElementCard";
import styled from "styled-components";
import { element } from "prop-types";

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

  console.log(data);

  const results = !searchTerm
    ? data
    : data.filter(
        element =>
          element.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          (element.type &&
            element.type
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (element.dimension && element.dimension.includes(searchTerm)) ||
          (element.air_date && element.air_date.includes(searchTerm)) ||
          (element.episode && element.episode.includes(searchTerm))
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
            <ElementCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}

      {match.path === "/location" &&
        results.map(location => {
          return (
            <ElementCard
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
            />
          );
        })}

      {match.path === "/episode" &&
        results.map(episode => {
          return (
            <ElementCard
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
