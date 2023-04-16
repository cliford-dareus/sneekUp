import React, { useEffect, useState } from "react";
import WeatherSection from '../../components/Weather'
import {
  DashboardContainer,
  DashboardHeader,
  Icon,
} from "./styles";
import useGetTime from "../../hooks/useGetTime";
import { RiMenu4Line } from "react-icons/ri";
import { Section } from "../styled-components";


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

      <WeatherSection time={time}/>

      <Section>
        <h2>Destination</h2>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur explicabo iure veniam cupiditate? Provident praesentium reiciendis nulla culpa dignissimos voluptas facilis asperiores ipsum quis quasi? Aspernatur corrupti assumenda repellendus.
        </h1>
      </Section>
    </DashboardContainer>
  );
};

export default index;
