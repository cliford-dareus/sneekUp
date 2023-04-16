import styled from "styled-components";
import { Anchor, Container } from "../styled-components";

/* Add a parten with Linear Gradien from Kevin Powe; */

export const LeftContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;

  @media screen and (min-width: 760px) {
    padding-inline: 5em;
  }
`;

export const RigthContainer = styled(Container)`
  display: none;

  @media screen and (min-width: 760px) {
    display: block;
    background-color: whitesmoke;
  }
`;

export const ForgetPinLink = styled(Anchor)`
  width: 100%;
  color: purple;
  text-align: right;
  padding: 1em;

  &:hover {
    color: whitesmoke;
  }

  @media screen and (min-width: 520px) {
    width: 75%;
  }
`;
