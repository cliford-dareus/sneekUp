import React, { useEffect, useState } from 'react';

const useGetTime = () => {
    const [time, setTime] = useState("");

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
  
      let time = hh + ":" + mm + " " + session;
  
      return time
    };
  
    useEffect(() => {
      const timeInterval = setInterval(() => {
        const date = new Date();
        const fTime = formatTime(date);
        setTime(fTime);
      }, 1000);
  
      return () => {
        clearInterval(timeInterval);
      };
    }, []);

    return time;
}

export default useGetTime;