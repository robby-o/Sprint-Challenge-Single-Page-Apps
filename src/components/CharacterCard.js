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

function CharacterCard({ name, image }) {
  return (
    <>
      <StyledParagraph>{name}</StyledParagraph>
      <img src={`${image}`} alt={`${name}`} />
    </>
  );
}

export default CharacterCard;
