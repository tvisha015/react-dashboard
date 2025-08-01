import { lazy } from 'react';

import ProtectedRoute from './ProtectedRoutes.jsx';
import path from 'path';

const ProtectedLayout = lazy(() => import('../../layout/ProtectedLayout.jsx'));

const NotFound = lazy(() => import('../modules/pageNotFound/PageNotFound.jsx'));
const Dashboard = lazy(() => import('../modules/dashboard/Dashboard'));
const Products = lazy(() => import('../modules/products/products.jsx'));

const PrivateRoutes = ({ isAuthorized }) => {
  let appRoutes = [
    {
      path: '/',
      element: (
        <ProtectedRoute redirectPath="/auth/login" isAuthorized={isAuthorized} />
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: '404-not-found',
          element: <NotFound />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ];

  return (
    <>
      <ProtectedLayout routes={appRoutes} />
    </>
  );
};

export default PrivateRoutes;
