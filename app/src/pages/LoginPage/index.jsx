import { StatusBar } from 'expo-status-bar';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import PAGES from '../../constants/pages';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <StyledView>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate(PAGES.REGISTER, { userId: '123' })}
      />
    </StyledView>
  );
};

export default LoginPage;
