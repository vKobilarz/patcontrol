import { StatusBar } from 'expo-status-bar';

import AuthenticationProvider from './src/context/Authentication';
import RoutesProvider from './src/routes/Provider';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationProvider>
        <StatusBar style="auto" />
        <RoutesProvider />
      </AuthenticationProvider>
    </NavigationContainer>
  );
};

export default App;
