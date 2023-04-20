import { motion } from "framer-motion";
import styled from "styled-components";
import { Icon } from "../../../pages/Dasboard/styles";

export const CardSlide = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 200px;
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  cursor: grab;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBottomInfo = styled.div``;

export const CardBottomInfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  line-height: 1;

  span:nth-of-type(2) {
    font-size: 0.8rem;
  }
`;

export const CardBottomWeather = styled.div`
  line-height: 1;
  span:nth-of-type(1) {
    position: relative;
    font-size: 3rem;
    /* background-color: red; */

    span {
      position: absolute;
      top: 0;
      right: -0.6em;
    }
  }
`;

export const CardCityName = styled.p`
  padding: 0.1em 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5em;
`;

export const CardDay = styled.p``;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;

  span:nth-of-type(2) {
    font-size: 0.7rem;
    line-height: 1;
  }
`;

export const CardIcon = styled(Icon)`
  width: 90px;
  height: 80px;
  /* background-color: red; */
  position: relative;

  img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: none;
  }
`;
