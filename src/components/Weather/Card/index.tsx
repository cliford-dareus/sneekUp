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

const index = () => {
  return (
    <CardSlide>
      <CardTop>
        <CardCityName>Miami</CardCityName>
        <CardDay>Mon</CardDay>
      </CardTop>

      <CardMiddle>
        <CardIcon>
          <TiWeatherPartlySunny />
        </CardIcon>
        <span>Strong Rain</span>
      </CardMiddle>

      <CardBottom>
        <CardBottomInfo>
          <CardBottomInfoContainer>
            <Icon>
              <WiStrongWind />
            </Icon>
            <span>21km/h</span>
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
            23
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
