import React, { useEffect, useState } from "react";
import { Pin } from "../../lib/PinHelper";

const index = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const inactive = Pin.getInactiveTime();
      const timeRemaining = inactive - now;
      setTimer(timeRemaining);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(timer);

  return <div></div>;
};

export default index;
