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

function ElementCard(props) {
  const { name, image, type, dimension, air_date, episode } = props.data;
  const { path } = props.match;

  return (
    <StyledDiv>
      <StyledParagraph>{name}</StyledParagraph>

      {path === "/character" && <img src={`${image}`} alt={`${name}`} />}

      {path === "/episode" && <StyledParagraph>{air_date}</StyledParagraph> && (
        <StyledParagraph>{episode}</StyledParagraph>
      )}

      {path === "/location" && <StyledParagraph>{type}</StyledParagraph> && (
        <StyledParagraph>{dimension}</StyledParagraph>
      )}
    </StyledDiv>
  );
}

export default ElementCard;
