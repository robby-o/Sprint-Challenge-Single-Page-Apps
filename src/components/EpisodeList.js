import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: DarkSlateGrey;
`;
const StyledH2 = styled.h2`
  display: flex;
  padding: 0;
  margin: 0;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log("something is broken...", error);
      });
  }, []);

  return (
    <StyledSection className="episode-list">
      <StyledDiv>
        <StyledH2>Episode List</StyledH2>
        <SearchForm episodes={episodes} />
      </StyledDiv>
    </StyledSection>
  );
}
