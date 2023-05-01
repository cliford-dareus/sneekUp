import React, { useEffect, useState } from "react";
import WeatherSection from "../../components/Weather";
import DestinationSection from "../../components/Destination";
import GameSection from "../../components/GameSection";
import Header from '../../components/Header';
import { DashboardContainer, Icon } from "./styles";
import useGetTime from "../../hooks/useGetTime";
import { Pin } from "../../lib/PinHelper";

const index = ({ data }: { data: any }) => {
  const time = useGetTime();
  const timeLeft = Pin.getInactiveTime()
  // console.log(new Date() - new Date(timeLeft))

  return (
    <DashboardContainer>
      <Header time={time}/>
      <WeatherSection time={time} data={data}/>
      <GameSection />
      <DestinationSection />
    </DashboardContainer>
  );             
};

export default index;
