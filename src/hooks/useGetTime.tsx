import React, { useEffect, useState } from "react";

const useGetTime = () => {
  const [time, setTime] = useState({
    hour: "",
    munites: "",
    session: "",
  });

  const formatTime = (date: Date) => {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";

    if (hh == 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    hh = hh < 10 ? Number("0") + hh : hh;
    mm = mm < 10 ? Number("0") + mm : mm;

    return { hh, mm, session };
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const date = new Date();
      const fTime = formatTime(date);
      setTime({
        ...time,
        hour: String(fTime.hh),
        munites: String(fTime.mm),
        session: fTime.session,
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return time;
};

export default useGetTime;
