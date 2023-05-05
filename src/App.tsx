import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GlobalStyle, MainContainer } from "./utils/styles/globalStyles";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dasboard";
import Layout from "./components/Layout";
import Setting from "./pages/Setting";
import LockScreen from "./pages/LockScreen";
import IdleTimer from "./lib/timer";
import { useAppDispatch } from "./app/hooks";
import { logout } from "./features/userSlice";
import { useGetForcastsQuery, useGetWeatherQuery } from "./features/weatherApi";
import useChangeWallpaper from "./hooks/useChangeWallpaper";
import BgImage from "./assets/bg/bg-purple.png";

function App() {
  const { wallpaper, changeWallpaper } = useChangeWallpaper(BgImage);
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const { data: weather } = useGetWeatherQuery({ lat: "25.76", lon: "-80.19" });

  useEffect(() => {
    const timer = new IdleTimer({
      timeOut: 20,
      onTimeOut: () => {
        setIsTimer(true);
        // dispatch(logout());
      },
      onExpired: () => {
        setIsTimer(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  useEffect(() => {
    if (isTimer) {
      if (isTimer === Boolean("false")) {
        //  console.log('gg')
      }
    }
  }, [isTimer]);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen data={weather} />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout wallpaper={wallpaper} />}>
              <Route path="/" element={<Dashboard data={weather} />} />

              <Route
                path="/setting"
                element={
                  <Setting
                    wallpaper={wallpaper}
                    changeWallpaper={changeWallpaper}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
