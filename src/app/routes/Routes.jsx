import { lazy, memo, Suspense } from "react";
import { useSelector } from "react-redux";

const PublicRoutes = lazy(() => import("./PublicRoutes"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

const PrivateRoutesMemo = memo(PrivateRoutes);
const PublicRoutesMemo = memo(PublicRoutes);

const Routes = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuthenticated); 
    console.log("🚀 ~ Routes ~ isAuthorized:", isAuthorized);

  const routes = isAuthorized ? (
    <PrivateRoutesMemo isAuthorized={isAuthorized} />
  ) : (
    <PublicRoutesMemo />
  );

  return <Suspense fallback={<h1>Loading...</h1>}>{routes}</Suspense>;
};

export default Routes;
