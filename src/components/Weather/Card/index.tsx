import React from "react";
import {
  CardBottom,
  CardBottomInfo,
  CardBottomInfoContainer,
  CardBottomWeather,
  CardCityName,
  CardDay,
  CardIcon,
  CardMiddle,
  CardSlide,
  CardTop,
} from "./styles";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiDegrees, WiStrongWind } from "react-icons/wi";
import { Icon } from "../../../pages/Dasboard/styles";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const index = ({ forecast, index }: { forecast: any; index: number }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <CardSlide>
      <CardTop>
        <CardCityName>Miami</CardCityName>
        <CardDay>{forecastDays[index]}</CardDay>
      </CardTop>

      <CardMiddle>
        <CardIcon>
          {/* <TiWeatherPartlySunny /> */}
          <img
            // alt="weather"
            className="weather-icon"
            src={`http://openweathermap.org/img/w/${forecast?.weather[0].icon}.png`}
            width="80px"
          />
        </CardIcon>
        <span>{forecast?.weather[0].description}</span>
      </CardMiddle>

      <CardBottom>
        <CardBottomInfo>
          <CardBottomInfoContainer>
            <Icon>
              <WiStrongWind />
            </Icon>
            <span>{Math.round(forecast?.wind.speed)}km/h</span>
          </CardBottomInfoContainer>
          <CardBottomInfoContainer>
            <Icon>
              <WiStrongWind />
            </Icon>
            <span>90%</span>
          </CardBottomInfoContainer>
        </CardBottomInfo>

        <CardBottomWeather>
          <span>
            {Math.round(forecast?.main.temp)}
            <Icon>
              <WiDegrees />
            </Icon>
          </span>
        </CardBottomWeather>
      </CardBottom>
    </CardSlide>
  );
};

export default index;
