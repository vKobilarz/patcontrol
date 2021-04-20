import { View, Text } from 'react-native';
import styled, { css } from 'styled-components';

import { RectButton } from 'react-native-gesture-handler';

interface CardTitleProps {
  error: boolean;
}

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const CardContainer = styled(RectButton)`
  width: 100%;
  margin: 8px 0px;
  border-radius: 4px;

  background-color: #4d5166;
`;

export const CardTitle = styled(Text)<CardTitleProps>`
  background-color: #ffaa00;
  color: #fff;
  font-size: 24px;
  padding: 8px;
  border-bottom-width: 3px;
  font-family: 'RobotoSlab-Medium';

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${(props) =>
    props.error
      ? css`
          border-bottom-color: #c53030;
        `
      : css`
          border-bottom-color: #00ff00;
        `}
`;

export const CardBody = styled(View)`
  padding: 4px 8px;
  flex-direction: column;
`;

export const CardRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px;
`;

export const CardText = styled(Text)`
  color: #fff;

  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const RoomListTitle = styled(Text)`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

export const RoomListTitleContainer = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  width: 100%;
`;
