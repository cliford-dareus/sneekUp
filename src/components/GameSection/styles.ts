import styled from "styled-components";
import { Section } from "../../pages/styled-components";

export const GameSectionContainer = styled(Section)`
  height: auto;
  margin-top: 1em;

  @media screen and (min-width: 760px) {
    /* height: 100vh; */
  }
`;

export const GameCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
    /* background-color: red; */

    @media screen and (min-width: 760px) {
        flex-direction: row;
  }
`;

export const GameCards = styled.div`
  width: 100%;
  height: 350px;
  padding: 1em;
  color: whitesmoke;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 760px) {
    /* height: 100vh; */
    width: 33.33%;
    height: 500px;
  }
`;
