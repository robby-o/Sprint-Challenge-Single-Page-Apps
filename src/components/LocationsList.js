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

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log("something is broken...", error);
      });
  }, []);

  return (
    <StyledSection className="location-list">
      <StyledDiv>
        <StyledH2>Location List</StyledH2>
        <SearchForm locations={locations} />
      </StyledDiv>
    </StyledSection>
  );
}
