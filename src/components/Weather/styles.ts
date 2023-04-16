import styled from "styled-components";
import { Section } from "../../pages/styled-components";
import { motion } from "framer-motion";
import { Icon } from "../../pages/Dasboard/styles";

export const WeatherSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-top: 8em;
  height: auto;

  @media screen and (min-width: 800px) {
    height: 100vh;
    flex-direction: row;
    padding-top: 17em;
    height: calc(100vh - 5.5em);
    /* height: 100vh; */
  }
`;

export const DashboardWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 250px;
  padding: 1em;
  border-radius: 0.5em;
  position: relative;

  @media screen and (min-width: 800px) {
    width: 60%;
    height: 400px;
  }
`;

export const DashboardWeatherSlideContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    height: 400px;
  }
`;

export const DashboardWeather = styled.div`
  span {
    font-size: 4rem;
    line-height: 1;
  }
`;

export const WeatherContainer = styled.div`
  margin-top: auto;
`;

export const WeatherIcon = styled(Icon)`
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  font-size: 6rem;
  color: greenyellow;

  @media screen and (min-width: 800px) {
    top: 0;
    font-size: clamp(9rem, 20vw, 14rem);
  }
`;

export const WeatherInfo = styled.div`
  line-height: 1;

  span {
    font-size: clamp(4rem, 20vw, 6rem);
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

export const SliderInnerContainer = styled(motion.div)`
  display: flex;
  gap: 1em;
`;

export const SlideTitle = styled.h2`
  width: min-content;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.5em;

  @media screen and (min-width: 800px) {
    font-size: 4rem;
    /* width: min-content; */
    margin-bottom: 0;
  }
`;
