import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled(motion.ul)`
  position: absolute;
  top: 4em;
  width: 300px;
  padding: 1em;
`;

export const NavigationItem = styled(motion.li)`
  padding: .5em;
  list-style-type: none;
  color: whitesmoke;
  pointer-events: all;
  cursor: pointer;
`;

export const NavigationItemLink = styled(motion(Link))`
  
`;

export const NavigationProfile = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  pointer-events: all;

  background-image: radial-gradient(
    rgba(0, 0, 0, 0) 1px,
    rgba(255, 255, 255, 0.2) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  -moz-backdrop-filter: blur(3px);
`;

export const ProfilePicContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: purple;
`;

export const NavigationProfileLeft = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  span {
  }
`;

export const NavigationProfileRigth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:nth-of-type(1){
    display: flex;
    align-items: center;
    gap: .5em;
  }

  div:nth-of-type(2){
    display: flex;
    align-items: center;
    gap: .5em;

    span{
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    };

    span:nth-of-type(2){
        padding: .3em 1.5em;
        background-color: purple;
        border-radius: 1em;
    }
  }
`;
