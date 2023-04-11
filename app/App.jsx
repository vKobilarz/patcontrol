import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import PAGES from './src/constants/pages';

import BluetoothConfigPage from './src/pages/BluetoothConfigPage';
import CsvConfigPage from './src/pages/CsvConfigPage';
import LoginPage from './src/pages/LoginPage';
import PatrimonyScanningPage from './src/pages/PatrimonyScanningPage';
import RegisterPage from './src/pages/RegisterPage';
import RoomDetailPage from './src/pages/RoomDetailPage';
import RoomListPage from './src/pages/RoomListPage';
import RoomScanningPage from './src/pages/RoomScanningPage';
import AuthenticationProvider from './src/context/Authentication';

const Stack = createNativeStackNavigator();

const headerOptions = {
  header: () => {
    return null;
  },
};

const App = () => {
  return (
    <AuthenticationProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={PAGES.LOGIN}
            component={LoginPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.REGISTER}
            component={RegisterPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.CSV_CONFIG}
            component={CsvConfigPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.BLUETOOTH_CONFIG}
            component={BluetoothConfigPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.ROOM_LIST}
            component={RoomListPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.ROOM_DETAIL}
            component={RoomDetailPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.ROOM_SCANNING}
            component={RoomScanningPage}
            options={headerOptions}
          />
          <Stack.Screen
            name={PAGES.PATRIMONY_SCANNING}
            component={PatrimonyScanningPage}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthenticationProvider>
  );
};

export default App;
