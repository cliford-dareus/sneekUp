import React, { useEffect, useState } from "react";
import { TimeType } from "../utils/types";

const useGetTime = (): TimeType => {
  const [time, setTime] = useState<TimeType>({
    hour: "",
    munites: "",
    session: "",
    day: ''
  });

  const formatTime = (date: Date) => {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
    let day = date.toDateString();

    if (hh == 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    return {hh, mm, session, day };
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const date = new Date();
      const fTime = formatTime(date);
      setTime({
        ...time,
        hour: fTime.hh < 10 ? "0" + String(fTime.hh) : String(fTime.hh),
        munites: fTime.mm < 10 ? "0" + String(fTime.mm) : String(fTime.mm),
        session: fTime.session,
        day: fTime.day
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return time;
};

export default useGetTime;
export type Time = ReturnType <typeof useGetTime>;