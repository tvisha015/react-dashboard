import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized, redirectPath }) => {
  
  // If the user is not authenticated, redirect them to the specified redirect path
  if (!isAuthorized) return <Navigate to={redirectPath} replace/>;

  return <Outlet />;
};
  
export default ProtectedRoute;
