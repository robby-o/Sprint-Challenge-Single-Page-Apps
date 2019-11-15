import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/`)
  //     .then(response => {
  //       console.log(response);
  //       setCharacters(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log("something is broken...", error);
  //     });
  // }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      {characters.map(character => {
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
