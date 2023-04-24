import styled from "styled-components";
import { Section } from "../../pages/styled-components";

export const GameSectionContainer = styled(Section)`
  height: auto;
  margin-top: 1em;
`;

export const GamesCardContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const GamesCard = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.5em;
  width: 100%;
  height: 400px;
`;
