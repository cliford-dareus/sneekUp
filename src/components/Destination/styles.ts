import styled from "styled-components";
import { Button, Section } from "../../pages/styled-components";
import { Icon } from "../../pages/Dasboard/styles";
import { motion } from "framer-motion";

export const DestinationContainer = styled(Section)`
  height: auto;
  margin-top: 1em;
`;

export const DestinationFilter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5em;
  margin-top: 1em;
`;

export const DestinationFilterTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

export const DestinationFilterButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
`;

export const FilterButton = styled(Button)`
  font-size: 0.9rem;
  padding-inline: 1em;
  color: whitesmoke;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  position: relative;
`;

export const FilterButtonIndicator = styled(Icon)`
  position: absolute;
  top: -0.6em;
  right: 0;
  font-size: 1rem;
  background-color: red;
  border-radius: 50%;
`;

export const DestinationCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;

  @media screen and (min-width: 786px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    height: calc(250px * 2 + 2em);
  }
`;

export const DestinationCard = styled(motion.div)`
  position: relative;
  height: 190px;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  padding: 1em;
  border-radius: 0.5em;
  overflow: hidden;
  isolation: isolate;
  background-color: #ccc;
  filter: grayscale(100%);
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    mix-blend-mode: darken;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1em;
    background: linear-gradient(to bottom, purple, transparent);
  }

  @media screen and (min-width: 786px) {
    width: calc(25% - 0.8em);
    max-width: 550px;
    height: 250px;
  }
`;
