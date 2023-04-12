import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children, ...rest }: PropsWithChildren) => {
    // const user = getUserFromLocalStorage();

  // const user = useAppSelector((state) => state.user.isSuccess);
  return 0 ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes