import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Pin } from "../lib/PinHelper";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children, ...rest }: PropsWithChildren) => {
  // const user = Pin.get("fakename").isloggin;
  const user = useSelector((state: RootState) => state.user.isloggin)

  return user ? <Outlet /> : <Navigate to="/lockscreen" />;
};

export default ProtectedRoutes;
