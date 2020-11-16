import React from 'react';

import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import LoadingScreen from '../pages/Loading';

const Routes = () => {
  const {signed, isLoading} = useAuth();
  //console.log(signed);
  if (isLoading) {
    return <LoadingScreen />;
  }

  return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
