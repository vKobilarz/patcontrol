import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PAGES from '../constants/pages';

import BluetoothConfigPage from '../pages/BluetoothConfigPage';
import CsvConfigPage from '../pages/CsvConfigPage';
import LoginPage from '../pages/LoginPage';
import PatrimonyScanningPage from '../pages/PatrimonyScanningPage';
import RegisterPage from '../pages/RegisterPage';
import RoomDetailPage from '../pages/RoomDetailPage';
import RoomListPage from '../pages/RoomListPage';
import RoomScanningPage from '../pages/RoomScanningPage';
import useAuthentication from '../hooks/useAuthentication';
import { useEffect } from 'react';
import AUTHENTICATION_TYPE from '../constants/authenticationType';

const headerOptions = {
  header: () => {
    return null;
  },
};

const Stack = createNativeStackNavigator();

const RoutesProvider = () => {
  const { navigate } = useNavigation();
  const { token, authenticationType } = useAuthentication();

  useEffect(() => {
    if (
      [AUTHENTICATION_TYPE.ONLINE, AUTHENTICATION_TYPE.OFFLINE].some(
        (type) => type === authenticationType,
      )
    ) {
      return navigate(PAGES.ROOM_LIST);
    }

    navigate(PAGES.LOGIN);
  }, [token, authenticationType]);

  return (
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
  );
};

export default RoutesProvider;
