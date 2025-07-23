import { lazy, memo, Suspense } from "react";

const PublicRoutes = lazy(() => import("./PublicRoutes"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

const PrivateRoutesMemo = memo(PrivateRoutes);
const PublicRoutesMemo = memo(PublicRoutes);

const Routes = () => {
  const isAuthorized = false;

  const routes = isAuthorized ? (
    <PrivateRoutesMemo isAuthorized={isAuthorized} />
  ) : (
    <PublicRoutesMemo />
  );

  return <Suspense fallback={<h1>Loading...</h1>}>{routes}</Suspense>;
};

export default Routes;
