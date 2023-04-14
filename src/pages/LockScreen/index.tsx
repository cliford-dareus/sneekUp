import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LockScreen, LockScreenLoginBtn, LockScreenTime } from "./styles";
import useGetTime from "../../hooks/useGetTime";

const index = () => {
  const time  = useGetTime();

  return (
    <LockScreen>
      <LockScreenTime>
        <span>{time}</span>
      </LockScreenTime>

      <div>
        <h1>Weather Api</h1>
      </div>

      <LockScreenLoginBtn to="/login">Login</LockScreenLoginBtn>
    </LockScreen>
  );
};

export default index;
