import React, { useEffect, useState } from "react";
import WeatherSection from "../../components/Weather";
import DestinationSection from "../../components/Destination";
import GameSection from "../../components/GameSection";
import { DashboardContainer, DashboardHeader, Icon } from "./styles";
import useGetTime from "../../hooks/useGetTime";
import { RiMenu4Line } from "react-icons/ri";

const index = ({ data, forecasts }: { data: any; forecasts: any }) => {
  const time = useGetTime();

  return (
    <DashboardContainer>
      <DashboardHeader>
        <span>{time.day}</span>
        <Icon>
          <RiMenu4Line />
        </Icon>
        {/* Maybe add a Music player in the header */}
      </DashboardHeader>
      <WeatherSection time={time} data={data} forecasts={forecasts} />
      <GameSection />
      <DestinationSection />
    </DashboardContainer>
  );
};

export default index;
