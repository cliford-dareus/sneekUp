import React, { useEffect, useState } from "react";
import WeatherSection from "../../components/Weather";
import DestinationSection from "../../components/Destination";
import GameSection from "../../components/GameSection";
import Header from "../../components/Header";
import { DashboardContainer } from "./styles";
import useGetTime from "../../hooks/useGetTime";
import Footer from "../../components/Footer";

const index = ({data}: {data: any}) => {
  const time = useGetTime();

  return (
    <DashboardContainer>
      <WeatherSection time={time} data={data} />
      <GameSection />
      <DestinationSection />
    </DashboardContainer>
  );
};

export default index;
