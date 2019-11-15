import React from "react";
import styled from "styled-components";

function CharacterCard({ name, image }) {
  const StyledParagraph = styled.p`
    width: 10%;
    background-color: snow;
    display: flex;
    justify-content: center;
    opacity: 0.6;
    border-radius: 4px;
    font-weight: bold;
    color: DarkSlateGrey;
  `;
  return (
    <>
      <StyledParagraph>{name}</StyledParagraph>
      <img src={`${image}`} alt={`${name}`} />
    </>
  );
}

export default CharacterCard;
