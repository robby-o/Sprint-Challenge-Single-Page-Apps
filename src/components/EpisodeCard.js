import React from "react";

import styled from "styled-components";

const StyledParagraph = styled.p`
  width: 100%;
  background-color: snow;
  display: flex;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  border-radius: 4px;
  font-weight: bold;
  color: DarkSlateGrey;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 2% 0;
  border: 1px dotted black;
  border-radius: 2px;
`;

export default function EpisodeCard({ name, airDate, episode }) {
  return (
    <StyledDiv>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledParagraph>{airDate}</StyledParagraph>
      <StyledParagraph>{episode}</StyledParagraph>
    </StyledDiv>
  );
}
