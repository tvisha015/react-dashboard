import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
 
const Login = lazy(() => import('./Login'));
 
const Auth = () => {
  return (
    <div>
      {useRoutes([
        { 
          path: 'auth/login',
          element: <Login />,
        },
        {
          path: '*',
          element: <Navigate to="/auth/login" replace />,
        },
      ])}
    </div>
  );
};
 
export default Auth;
