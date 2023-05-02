import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  SettingContainer,
  SettingContents,
  SettingDarkMode,
  SettingWallpaper,
  SettingWallpaperCard,
  SettingWallpaperCardBox,
  SettingWallpaperCardBoxInner,
  SettingWallpaperForm,
} from "./styles";
import { wallpapers } from "../../utils/data/Wallpaper";

const index = ({
  changeWallpaper,
  wallpaper,
}: {
  changeWallpaper: ({
    newImage,
    darkMode,
  }: {
    newImage: string;
    darkMode?: boolean;
  }) => void;
  wallpaper: any;
}) => {
  const [file, setFile] = useState<{ image: any }>({
    image: null,
  });
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setFile({ image: e?.target?.files![0] });
  };

  //   console.log(file)

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("change it");
  };

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!
    );
  }, []);

  console.log(wallpaper);

  return (
    <SettingContainer style={{ backgroundImage: `url(${wallpaper.image})` }}>
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
          <SettingWallpaperCardBox ref={carouselRef}>
            <SettingWallpaperCardBoxInner
              drag={"x"}
              dragConstraints={{ right: 0, left: -width }}
            ></SettingWallpaperCardBoxInner>
            {wallpapers.map((bg) => (
              <SettingWallpaperCard
                whileHover={{ scale: 1.05 }}
                onClick={() => changeWallpaper({ newImage: bg.img })}
              >
                <img src={`${bg.img}`} alt="" />
                {bg.name}
              </SettingWallpaperCard>
            ))}
          </SettingWallpaperCardBox>

          <SettingWallpaperForm>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={handleFiles} />
              <button>Change BG</button>
            </form>
          </SettingWallpaperForm>
        </SettingWallpaper>
      </SettingContents>

      <Footer />
    </SettingContainer>
  );
};

export default index;
