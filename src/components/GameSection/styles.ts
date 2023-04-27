import styled from "styled-components";
import { Section } from "../../pages/styled-components";
import { motion } from "framer-motion";

export const GameSectionContainer = styled(Section)`
  height: auto;
  margin-top: 1em;
`;

export const GameCardContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  margin-top: 1em;
`;

export const GameCardInner = styled(motion.div)`
  display: flex;
  gap: 1em;
`;

export const GameCard = styled.div`
  /* max-height: 500px; */
  height: 400px;
  min-width: 260px;
  padding: 1em;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    min-width: calc(100% / 4);
    height: 35vw;
  }
`;

export const GameCardBackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const GameCardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1em;
  background: linear-gradient(to top, purple, transparent, black);
`;

export const GameCardStatus = styled.span`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.5em;
  aspect-ratio: 1;
  border-bottom-left-radius: 50%;
  background-color: purple;
`;

export const GameCardGenre = styled.div`
  margin-top: 1em;
  span {
    padding: 0.2em 0.5em;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    margin-right: 0.5em;
  }
`;

export const GameFavoritedContainer = styled.div`
  margin-top: 1em;
`;

export const GameFavoritedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;
`;

export const GameFavoritedCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  min-height: 50px;
  width: calc(100% / 2 - .5em);
  padding: 1em;
  height: 10vw;
  background-color: rgba(255, 255, 255, 0.3);
  

  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 760px) {
    width: calc(100% /3 - .7em);
  }
`;
