import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY, ROUTERS } from "../constants/common.constants";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem(LOCAL_STORAGE_KEY.USER_DATA);
  if (!user) {
    // user is not authenticated
    return <Navigate to={ROUTERS.LOGIN} />;
  }
  return children;
};
