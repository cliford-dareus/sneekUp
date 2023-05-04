import React from "react";
import { Navigation, NavigationProfile } from "./styles";
import { Link } from "react-router-dom";
import NavigationItem from "../NavigationItem";

const links = [
  {
    id: 'nav_1',
    title: 'Home',
    icon: '',
    to: '/'
  },
  {
    id: 'nav_2',
    title: 'About Me',
    icon: '',
    to: '/about-me'
  },
  {
    id: 'nav_3',
    title: 'Contact-Me',
    icon: '',
    to: '/contact-me'
  },

];

export type INavItem = {
  id: string;
  title: string;
  icon: string;
  to: string
}

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
      {links.map((data, index) => (
        <NavigationItem data={data}/>
      ))}
    </Navigation>
  );
};

export default index;
