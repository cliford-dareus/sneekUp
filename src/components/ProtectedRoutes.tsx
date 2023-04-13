import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children, ...rest }: PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.user.isloggin)

  // console.log(user)

  return user ? <Outlet /> : <Navigate to="/lockscreen" />;
};

export default ProtectedRoutes;
