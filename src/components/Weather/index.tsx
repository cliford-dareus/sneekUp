import React, { useEffect, useRef, useState } from "react";
import {
  DashboardWeather,
  DashboardWeatherContainer,
  DashboardWeatherSlideContainer,
  SlideTitle,
  SliderContainer,
  SliderInnerContainer,
  WeatherContainer,
  WeatherIcon,
  WeatherInfo,
  WeatherSection,
} from "./styles";
import { WiDaySnowWind, WiDegrees } from "react-icons/wi";
import { Time } from "../../hooks/useGetTime";
import Card from "./Card";
import { motion } from "framer-motion";

const index = ({ time }: { time: Time }) => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!
    );
  }, []);

  return (
    <WeatherSection>
      <DashboardWeatherContainer>
        <WeatherContainer>
          <WeatherIcon>
            <WiDaySnowWind />
          </WeatherIcon>

          <WeatherInfo>
            <span>23</span>
            <WiDegrees />
          </WeatherInfo>
        </WeatherContainer>

        <DashboardWeather>
          <span>{time.hour}</span>
          <span>:</span>
          <span>{time.munites}</span>
          <i>{time.session}</i>
        </DashboardWeather>
      </DashboardWeatherContainer>

      <DashboardWeatherSlideContainer>
        <SlideTitle>Weather forcast</SlideTitle>

        <SliderContainer ref={carouselRef}>
          <SliderInnerContainer
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </SliderInnerContainer>
        </SliderContainer>
      </DashboardWeatherSlideContainer>
    </WeatherSection>
  );
};

export default index;
