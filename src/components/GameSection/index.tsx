import React from "react";
import { SectionTitle } from "../../pages/styled-components";
import { GameSectionContainer, GamesCard, GamesCardContainer } from "./styles";

const index = () => {
  return (
    <GameSectionContainer>
      <SectionTitle>
        Upcoming <br /> Games To Watch
      </SectionTitle>

      <GamesCardContainer>
        <GamesCard>
          
        </GamesCard>
        <GamesCard></GamesCard>
        <GamesCard></GamesCard>
      </GamesCardContainer>
    </GameSectionContainer>
  );
};

export default index;
