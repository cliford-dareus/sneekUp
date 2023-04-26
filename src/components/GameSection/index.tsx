import React from "react";
import { SectionTitle } from "../../pages/styled-components";
import { GameCards, GameCardsContainer, GameSectionContainer } from "./styles";

const index = () => {
  return (
    <GameSectionContainer>
      <SectionTitle>
        Upcoming <br /> Games To Watch
      </SectionTitle>

      <GameCardsContainer>
        <GameCards>
            <p>Title</p>
        </GameCards>
        <GameCards>
            <p>Title</p>
        </GameCards>
        <GameCards>
            <p>Title</p>
        </GameCards>
      </GameCardsContainer>
    </GameSectionContainer>
  );
};

export default index;
