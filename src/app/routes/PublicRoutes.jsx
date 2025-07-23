import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Auth = lazy(() => import('../modules/auth/Auth'));

const PublicRoutes = () => {
  const routes = [
    {
      path: '*',
      element: <Auth />,
    },
  ];

  return useRoutes(routes);
};

export default PublicRoutes;
