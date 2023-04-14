import React, { useEffect, useState } from "react";
import {
  LockScreen,
  LockScreenLoginBtn,
  LockScreenTime,
  LockScreenWeatherContainer,
} from "./styles";
import useGetTime from "../../hooks/useGetTime";
import {
  ArrowRightOnRectangleIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

const index = () => {
  const time = useGetTime();

  return (
    <LockScreen>
      <LockScreenTime>
        <span>{time.hour}</span>
        <span>{time.munites}</span>
        <span>{time.session}</span>
      </LockScreenTime>

      <LockScreenWeatherContainer>
        <CloudIcon
          style={{ color: "whitesmoke", width: "5em", height: "5em" }}
        />
        <p>30</p>
        <span>.</span>
      </LockScreenWeatherContainer>

      <LockScreenLoginBtn to="/login">
        <ArrowRightOnRectangleIcon
          style={{ color: "whitesmoke", width: "100%", height: "100%" }}
        />
      </LockScreenLoginBtn>
    </LockScreen>
  );
};

export default index;
