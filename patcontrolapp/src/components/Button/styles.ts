import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ffaa00;
  border-radius: 10px;
  margin-top: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #282a36;
  font-size: 18px;
  flex: 1;
  text-align: center;
`;
