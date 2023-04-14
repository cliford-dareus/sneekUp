import styled from "styled-components";
import { Container } from "../styled-components";
import { Link } from "react-router-dom";
import Image1 from "../../assets/image1.png";

export const LockScreen = styled(Container)`
  position: relative;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-image: url(${Image1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LockScreenTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
    font-size: clamp(9em, 20vw, 10rem);
    font-weight: 900;
    line-height: 1;
    &:nth-of-type(3) {
      font-size: 4rem;
    }
  }
`;

export const LockScreenLoginBtn = styled(Link)`
  position: absolute;
  padding: 0.5em 1.5em;
  border-radius: 2em;
  bottom: 3em;
  background-color: purple;
  /* color: whitesmoke; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 3em;
`;

export const LockScreenWeatherContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;

  p {
    font-size: 5em;
  }

  span {
    width: 20px;
    aspect-ratio: 1;
    border-radius: 100%;
    background-color: transparent;
    align-self: flex-start;
    margin-top: 1em;
    -webkit-box-shadow: inset 0px 0px 0px 5px white;
    -moz-box-shadow: inset 0px 0px 0px 5px white;
    box-shadow: inset 0px 0px 0px 5px white;
  }
`;
