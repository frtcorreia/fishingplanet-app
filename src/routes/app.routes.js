import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/Signin';

const AppStack = createStackNavigator();

const AuthRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="SignIn" component={SignIn} />
  </AppStack.Navigator>
);

export default AuthRoutes;
