import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Pin } from "../lib/PinHelper";

const ProtectedRoutes = ({ children, ...rest }: PropsWithChildren) => {
  const user = Pin.get("fakename").isloggin;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
