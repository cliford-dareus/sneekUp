import React from "react";
import { NavigationItem } from "../Navigation/styles";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const index = ({ index}: {index: number}) => {
  return (
    <NavigationItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={index}
    >
        Home
    </NavigationItem>
  );
};

export default index;
