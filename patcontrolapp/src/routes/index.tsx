import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RoomList from '../pages/RoomList';

const Auth = createStackNavigator();

const AuthRoutes: FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#282a36' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="RoomList" component={RoomList} />
  </Auth.Navigator>
);

export default AuthRoutes;
