import React from "react";
import {
  NavigationProfile,
  NavigationProfileLeft,
  NavigationProfileRigth,
  ProfilePicContainer,
} from "../Navigation/styles";
import { logout } from "../../features/userSlice";
import { RiLogoutCircleRLine, RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";

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
  const dispatch = useAppDispatch();

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

          <span onClick={() => dispatch(logout())}>
            <RiLogoutCircleRLine />
          </span>
        </div>
      </NavigationProfileRigth>
    </NavigationProfile>
  );
};

export default index;
