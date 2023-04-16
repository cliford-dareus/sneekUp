import React, { useEffect, useState } from "react";
import WeatherSection from "../../components/Weather";
import DestinationSection from "../../components/Destination";
import { DashboardContainer, DashboardHeader, Icon } from "./styles";
import useGetTime from "../../hooks/useGetTime";
import { RiMenu4Line } from "react-icons/ri";

const index = () => {
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

      <WeatherSection time={time} />

      <DestinationSection />
    </DashboardContainer>
  );
};

export default index;
