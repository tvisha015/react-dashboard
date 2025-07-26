import { lazy, memo, Suspense } from "react";
import { useSelector } from "react-redux";

const PublicRoutes = lazy(() => import("./PublicRoutes"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

const PrivateRoutesMemo = memo(PrivateRoutes);
const PublicRoutesMemo = memo(PublicRoutes);

const Routes = () => {
    const {
      isAuthenticated
    } = useSelector((state) => state.auth); // ✅ Get from Redux

  const routes = isAuthenticated ? (
    <PrivateRoutesMemo isAuthorized={isAuthenticated} />
  ) : (
    <PublicRoutesMemo />
  );

  return <Suspense fallback={<h1>Loading...</h1>}>{routes}</Suspense>;
};

export default Routes;
