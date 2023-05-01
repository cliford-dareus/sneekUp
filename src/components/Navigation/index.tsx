import React from "react";
import { Navigation, NavigationProfile } from "./styles";
import { Link } from "react-router-dom";
import NavigationItem from "../NavigationItem";

const links = [1, 2, 3, 4, 5];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const index = () => {
  return (
    <Navigation variants={variants}>
      {links.map((link, index) => (
        <NavigationItem index={index} />
      ))}
    </Navigation>
  );
};

export default index;
