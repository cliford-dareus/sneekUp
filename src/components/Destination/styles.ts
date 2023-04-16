import styled from "styled-components";
import { Button, Section } from "../../pages/styled-components";

export const DestinationContainer = styled(Section)`
  height: auto;
`;

interface FilterProps {
    readonly isOpen: boolean;
  }

export const DestinationFilter = styled.div<FilterProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 1em;
  height: ${(props) => props.isOpen? '150px': '40px'};
`;

export const DestinationFilterTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DestinationFilterButtonContainer = styled.div`
  display: flex;
  gap: 0.3em;
`;

export const FilterButton = styled(Button)`
  font-size: 0.9rem;
  color: whitesmoke;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const DestinationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const DestinationCard = styled.div`
  position: relative;
  height: 200px;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  padding: 1em;
  border-radius: 0.5em;
  overflow: hidden;
  isolation: isolate;
  background-color: #ccc;

  img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    mix-blend-mode: darken;
  }
`;