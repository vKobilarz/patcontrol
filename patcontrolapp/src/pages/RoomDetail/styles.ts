import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

interface TableRowProps {
  variant?: 'title';
}

interface TableHeaderTextProps {
  width?: string;
}

interface TableBodyTextProps {
  width?: string;
}

export const Table = styled(View)`
  border-color: #4d5166;
  border-width: 3px;
  border-radius: 8px;
  padding: 4px 0px;
`;

export const TableRow = styled(View)<TableRowProps>`
  flex-direction: row;
  width: 100%;
  padding: 8px;

  border-bottom-color: #4d5166;
  border-bottom-width: 1px;
  ${(props) =>
    props.variant === 'title' &&
    css`
      border-bottom-width: 3px;
    `}
`;

export const TableRowButton = styled(RectButton)`
  flex-direction: row;
  width: 100%;
  padding: 8px;

  border-bottom-color: #4d5166;
  border-bottom-width: 1px;
`;

export const TableHeaderText = styled(Text)<TableHeaderTextProps>`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
  text-align: center;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const TableBodyText = styled(Text)<TableBodyTextProps>`
  font-family: 'RobotoSlab-Regular';
  color: #fff;
  font-size: 16px;
  text-align: center;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
