import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MainContainer } from "./utils/styles/globalStyles";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dasboard";
import LockScreen from "./pages/LockScreen";
import IdleTimer from "./lib/timer";
import { useAppDispatch } from "./app/hooks";
import { logout } from "./features/userSlice";

function App() {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = new IdleTimer({
      timeOut: 20,
      onTimeOut: () => {
        setIsTimer(true);
        // dispatch(logout())
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
      dispatch(logout());
      setIsTimer(false);
      localStorage.removeItem("_expiredTime");
      if (isTimer === Boolean("false")) {
        Navigate("/lockscreen");
      }
    }
  }, [isTimer]);

  return (
    <MainContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lockscreen" element={<LockScreen />} />
        <Route element={<ProtectedRoutes />}>
          {/* Add a Layout for navbar */}
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </MainContainer>
  );
}

export default App;
