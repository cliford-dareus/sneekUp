import React, { ChangeEvent, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bg from "../../assets/image1.png";
import {
  SettingContainer,
  SettingContents,
  SettingDarkMode,
  SettingWallpaper,
  SettingWallpaperCard,
  SettingWallpaperCardBox,
  SettingWallpaperForm,
} from "./styles";

const index = ({
  changeWallpaper,
}: {
  changeWallpaper: ({
    newImage,
    darkMode,
  }: {
    newImage: string;
    darkMode?: boolean;
  }) => void;
}) => {
  const [file, setFile] = useState<{ image: any }>({
    image: null,
  });

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setFile({ image: e?.target?.files![0] });
  };

  //   console.log(file)

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("change it");
  };

  return (
    <SettingContainer>
      <Header />

      <SettingContents>
        <SettingDarkMode>
          <span>Mode</span>
          <div>
            <span>Light</span>
            <span>Switch</span>
          </div>
        </SettingDarkMode>

        <SettingWallpaper>
          <span>WallPaper</span>
          <SettingWallpaperCardBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((bg) => (
              <SettingWallpaperCard>{bg}</SettingWallpaperCard>
            ))}
          </SettingWallpaperCardBox>

          <SettingWallpaperForm>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={handleFiles} />
              <button onClick={() => changeWallpaper({ newImage: Bg })}>
                Change BG
              </button>
            </form>
          </SettingWallpaperForm>
        </SettingWallpaper>
      </SettingContents>

      <Footer />
    </SettingContainer>
  );
};

export default index;
