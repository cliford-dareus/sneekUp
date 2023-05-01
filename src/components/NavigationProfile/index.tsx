import React from "react";
import {
  NavigationProfile,
  NavigationProfileLeft,
  NavigationProfileRigth,
  ProfilePicContainer,
} from "../Navigation/styles";
import { RiLogoutCircleRLine, RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    opacity: 0,
  },
};

const index = () => {
  return (
    <NavigationProfile variants={variants}>
      <NavigationProfileLeft></NavigationProfileLeft>

      <NavigationProfileRigth>
        <div>
          <ProfilePicContainer></ProfilePicContainer>
          <span>Cliford</span>
        </div>

        <div>
          <span>
            <Link to="/setting">
              <RiSettings2Line />
            </Link>
          </span>

          <span>
            <RiLogoutCircleRLine />
          </span>
        </div>
      </NavigationProfileRigth>
    </NavigationProfile>
  );
};

export default index;
