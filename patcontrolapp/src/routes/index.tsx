import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RoomList from '../pages/RoomList';
import RoomDetail from '../pages/RoomDetail';
import CsvReader from '../pages/CsvReader';
import PatrimonyReader from '../pages/PatrimonyReader';
import RoomReader from '../pages/RoomReader';
import BluetoothConfig from '../pages/BluetoothConfig';

const Auth = createStackNavigator();

const AuthRoutes: FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#282a36' },
    }}
  >
    <Auth.Screen name="BluetoothConfig" component={BluetoothConfig} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="RoomList" component={RoomList} />
    <Auth.Screen name="RoomDetail" component={RoomDetail} />
    <Auth.Screen name="CsvReader" component={CsvReader} />
    <Auth.Screen name="PatrimonyReader" component={PatrimonyReader} />
    <Auth.Screen name="RoomReader" component={RoomReader} />
  </Auth.Navigator>
);

export default AuthRoutes;
