import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

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
      <input
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
