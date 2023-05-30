import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  ModeSwitch,
  SettingContainer,
  SettingContents,
  SettingDarkMode,
  SettingWallpaper,
  SettingWallpaperCard,
  SettingWallpaperCardBox,
  SettingWallpaperCardBoxInner,
  SettingWallpaperForm,
  SwitchHandle,
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
  const [isOn, setIsOn] = useState(wallpaper?.darkMode);
  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setFile({ image: e?.target?.files![0] });
  };

  const toggleSwitch = () => setIsOn(!isOn);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("change it");
  };

  useEffect(() => {
    setWidth(
      carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!
    );
  }, []);

  return (
    <SettingContainer>
      <SettingContents>
        <SettingDarkMode>
          <span>Mode</span>
          <div>
            <span>Light</span>
            <ModeSwitch onClick={toggleSwitch} data-ison={isOn}>
              <SwitchHandle layout transition={spring}></SwitchHandle>
            </ModeSwitch>
          </div>
        </SettingDarkMode>

        <SettingWallpaper>
          <span>WallPaper</span>
          <SettingWallpaperCardBox ref={carouselRef}>
            <SettingWallpaperCardBoxInner
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {wallpapers.map((bg) => (
                <SettingWallpaperCard
                  whileHover={{ scale: 1.05 }}
                  onClick={() => changeWallpaper({ newImage: bg.img })}
                >
                  <img src={`${bg.img}`} alt="" />
                  {bg.name}
                </SettingWallpaperCard>
              ))}
            </SettingWallpaperCardBoxInner>
          </SettingWallpaperCardBox>

          <SettingWallpaperForm>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={handleFiles} />
              <button>Change BG</button>
            </form>
          </SettingWallpaperForm>
        </SettingWallpaper>
      </SettingContents>
    </SettingContainer>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default index;
