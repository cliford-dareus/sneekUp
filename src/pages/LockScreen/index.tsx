import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const index = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      LockScreen
      <h1>{date.toLocaleTimeString()}</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default index;
