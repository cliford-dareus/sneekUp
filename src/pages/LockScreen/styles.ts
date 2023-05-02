import styled from "styled-components";
import { Container } from "../styled-components";
import { Link } from "react-router-dom";
import Image1 from "../../assets/bg/image1.png";

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
    font-size: clamp(12em, 20vw, 15rem);
    font-weight: 900;
    line-height: 1;
    &:nth-of-type(3) {
      font-size: 1.5rem;
    }
  }
`;

export const LockScreenLoginBtn = styled(Link)`
  position: absolute;
  padding: 0.5em 2em;
  border-radius: 2em;
  bottom: 3em;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 2.5em;
`;

export const LockScreenWeatherContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 0.5em; */
  margin-top: 1em;

  p {
    font-size: 1.5em;
    margin-left: .2em;
    font-weight: bold;
  }

  span {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: transparent;
    align-self: flex-start;
    margin-top: 0.2em;
    -webkit-box-shadow: inset 0px 0px 0px 2.5px white;
    -moz-box-shadow: inset 0px 0px 0px 2.5px white;
    box-shadow: inset 0px 0px 0px 2.5px white;
  }
`;
