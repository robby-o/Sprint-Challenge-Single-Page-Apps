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
  padding: 5%;
  margin: 5% 0;
  border: 1px dotted black;
  border-radius: 2px;
`;

function ElementCard({ name, image, type, dimension, airDate, episode }) {
  return (
    <StyledDiv>
      <StyledParagraph>{name}</StyledParagraph>

      {image && <img src={`${image}`} alt={`${name}`} />}

      {airDate && <StyledParagraph>{airDate}</StyledParagraph>}
      {episode && <StyledParagraph>{episode}</StyledParagraph>}

      {type && <StyledParagraph>{type}</StyledParagraph>}
      {dimension && <StyledParagraph>{dimension}</StyledParagraph>}
    </StyledDiv>
  );
}

export default ElementCard;
