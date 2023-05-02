import styled from "styled-components";
import { PageContainer } from "../styled-components";
import { motion } from "framer-motion";

export const SettingContainer = styled(PageContainer)``;

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
`;

export const SettingWallpaper = styled.div`
  border-top: 1px solid whitesmoke;
  padding-top: 1em;
`;

export const SettingWallpaperCardBox = styled.div`
  display: flex;
  gap: 1em;
  overflow: hidden;

  @media screen and (min-width: 760px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const SettingWallpaperCard = styled(motion.div)`
  min-width: 200px;
  width: 33%;
  background-color: red;
  height: 150px;
  border-radius: 0.5em;

`;

export const SettingWallpaperForm = styled.div`
    margin-top: 1em;
`;
