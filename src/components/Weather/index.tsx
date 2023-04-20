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
import { useGetForcastsQuery } from "../../features/weatherApi";

const index = ({
  time,
  data,
  forecasts,
}: {
  time: Time;
  data: any;
  forecasts: any;
}) => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!
    );
  }, [forecasts]);

  return (
    <WeatherSection>
      <DashboardWeatherContainer>
        <p>{data?.name}</p>
        <WeatherContainer>
          <WeatherIcon>
            {/* <WiDaySnowWind /> */}
            <img
              // alt="weather"
              width="100%"
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
          </WeatherIcon>

          <WeatherInfo>
            <span>{Math.round(data?.main.temp)}°</span>
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
            {forecasts?.list.length > 0 &&
              forecasts?.list
                ?.slice(0, 7)
                .map((forecast: any, index: number) => {
                  return <Card forecast={forecast} index={index} />;
                })}
          </SliderInnerContainer>
        </SliderContainer>
      </DashboardWeatherSlideContainer>
    </WeatherSection>
  );
};

export default index;
