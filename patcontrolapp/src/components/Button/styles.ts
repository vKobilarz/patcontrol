import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { css } from 'styled-components';

interface ContainerProps {
  bottomGutter?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #ffaa00;
  border-radius: 10px;
  margin-top: 8px;
  padding-right: 32px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) =>
     props.bottomGutter &&
       css`
        margin-bottom: 8px;
      `}
`;

export const ButtonLabel = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
  flex: 1;
  text-align: center;
`;
