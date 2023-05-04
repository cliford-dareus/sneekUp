import styled from "styled-components";
import { PageContainer } from "../styled-components";
import { motion } from "framer-motion";

export const SettingContainer = styled(PageContainer)`
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
`;

export const SettingContents = styled.section`
  padding: 1em;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SettingDarkMode = styled.div`
  border-top: 1px solid whitesmoke;
  padding-top: 1em;

  div {
    display: flex;
    justify-content: space-between;
    /* margin: 0 5em; */
    margin-top: 1em;
  }
`;

export const ModeSwitch = styled(motion.span)`
  width: 60px;
  height: 30px;
  border-radius: 3.125em;
  background-color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  &[data-isOn="true"] {
    justify-content: flex-end;
  }
`;

export const SwitchHandle = styled(motion.span)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: purple;
`;

export const SettingWallpaper = styled.div`
  border-top: 1px solid whitesmoke;
  padding-top: 1em;
`;

export const SettingWallpaperCardBox = styled(motion.div)`
  display: flex;
  gap: 1em;
  overflow: hidden;
  padding: 1em;

  @media screen and (min-width: 760px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const SettingWallpaperCardBoxInner = styled(motion.div)`
  display: flex;
  gap: 1em;
`;

export const SettingWallpaperCard = styled(motion.div)`
  min-width: 200px;
  max-width: 300px;
  height: 150px;
  border-radius: 0.5em;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  img {
    position: absolute;
    inset: o;
    z-index: -1;
    pointer-events: none;
  }
`;

export const SettingWallpaperForm = styled.div`
  margin-top: 1em;
  form {
    display: flex;
    justify-content: space-between;
    /* padding:  0 5em; */
  }
`;
