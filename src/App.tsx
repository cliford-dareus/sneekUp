import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GlobalStyle, MainContainer } from "./utils/styles/globalStyles";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dasboard";
import LockScreen from "./pages/LockScreen";
import IdleTimer from "./lib/timer";
import { useAppDispatch } from "./app/hooks";
import { logout } from "./features/userSlice";
import { useGetForcastsQuery, useGetWeatherQuery } from "./features/weatherApi";
import Footer from "./components/Footer";

function App() {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();
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
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lockscreen" element={<LockScreen data={weather} />} />
            <Route element={<ProtectedRoutes />}>
              {/* Add a Layout for navbar */}
              <Route path="/" element={<Dashboard data={weather} />} />
            </Route>
          </Routes>
        </>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
