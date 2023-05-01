import { motion } from "framer-motion";
import styled from "styled-components";
import { Icon } from "../../pages/Dasboard/styles";

export const DashboardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 1.2rem;
  width: 100%;
  position: relative;
`;

export const DasboardDayDisplay = styled.span`
  
`;

export const Navigation = styled(motion.nav)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2222;
  isolation: isolate;

  @media screen and (min-width: 760px) {
    width: 400px;
  }
`;

export const MenuToggle = styled(motion(Icon))`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
  z-index: 1;
`;

export const NavigationBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.2); */
  background-color: purple;
  z-index: -1;

  @media screen and (min-width: 760px) {
    width: 400px;
  }
`;
