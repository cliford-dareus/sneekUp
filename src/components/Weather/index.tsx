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
import { Loader } from "../../pages/styled-components";

const index = ({ time, data }: { time: Time; data: any }) => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { data: forecasts, isLoading } = useGetForcastsQuery({
    lat: "25.76",
    lon: "-80.19",
  });

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
          <WeatherIcon
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {/* <WiDaySnowWind /> */}
            <img
              // alt="weather"
              width="100%"
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
            />
          </WeatherIcon>

          <WeatherInfo>
            {Math.round(data?.main.temp)? (
              <span>{Math.round(data?.main.temp)}°</span>
            ) : (
              <Loader></Loader>
            )}
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
        <SlideTitle>Weather Forecast</SlideTitle>

        {!isLoading ? (
          <SliderContainer ref={carouselRef}>
            <SliderInnerContainer
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {forecasts?.list?.length > 0 &&
                forecasts?.list
                  ?.slice(0, 7)
                  .map((forecast: any, index: number) => {
                    return (
                      <Card key={index} forecast={forecast} index={index} />
                    );
                  })}
            </SliderInnerContainer>
          </SliderContainer>
        ) : (
          <div
            style={{
              width: "100%",
              height: "230px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Loader></Loader>
          </div>
        )}
      </DashboardWeatherSlideContainer>
    </WeatherSection>
  );
};

export default index;
