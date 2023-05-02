import { useState, useEffect } from "react";

const useChangeWallpaper = (image: any) => {
  const [wallpaper, setWallPaper] = useState(
    JSON.parse(localStorage.getItem("setting")!)
  );

  const changeWallpaper = ({
    newImage,
    darkMode = false,
  }: {
    newImage: string;
    darkMode?: boolean;
  }) => {
    const setting = localStorage.setItem(
      "setting",
      JSON.stringify({
        image: newImage,
        darkMode,
      })
    );

    setWallPaper(JSON.parse(localStorage.getItem("setting")!));
  };

  useEffect(() => {
    console.log("setUp");
    const setting = localStorage.setItem(
      "setting",
      JSON.stringify({
        image,
        darkMode: false,
      })
    );
  }, []);

  return {
    wallpaper,
    changeWallpaper,
  };
};

export default useChangeWallpaper;
