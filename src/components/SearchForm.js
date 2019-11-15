import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
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

export default function SearchForm({ characters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

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
