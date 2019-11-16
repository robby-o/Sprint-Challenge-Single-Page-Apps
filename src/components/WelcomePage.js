import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: DarkSlateGrey;
`;

export default function WelcomePage() {
  return (
    <StyledSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </StyledSection>
  );
}
