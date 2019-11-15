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

export default function ElementList({ match }) {
  console.log(match);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/${match.path}/`)
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.log("something is broken...", error);
      });
  }, [match.path]);

  return (
    <StyledSection className="character-list">
      <StyledDiv>
        <StyledH2>Character List</StyledH2>
        <SearchForm data={data} match={match} />
      </StyledDiv>
    </StyledSection>
  );
}
