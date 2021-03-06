import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import Providers from './context';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Providers>
        <StatusBar barStyle="light-content" backgroundColor="#282a36" />
        <View style={{ backgroundColor: '#282a36', flex: 1 }}>
          <Routes />
        </View>
      </Providers>
    </NavigationContainer>
  );
};

export default App;
