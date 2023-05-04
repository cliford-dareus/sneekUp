import React, { useEffect, useState } from "react";
import WeatherSection from "../../components/Weather";
import DestinationSection from "../../components/Destination";
import GameSection from "../../components/GameSection";
import Header from "../../components/Header";
import { DashboardContainer } from "./styles";
import useGetTime from "../../hooks/useGetTime";
import Footer from "../../components/Footer";

const index = ({ data, wallpaper }: { data: any, wallpaper: any }) => {
  const time = useGetTime();
  const [bg, setBg ] = useState(null);

  useEffect(() => {
    setBg(wallpaper?.image)
  }, [wallpaper])

  return (
    <DashboardContainer style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <WeatherSection time={time} data={data} />
      <GameSection />
      <DestinationSection />
      <Footer />
    </DashboardContainer>
  );
};

export default index;
