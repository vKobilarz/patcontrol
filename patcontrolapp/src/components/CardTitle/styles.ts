import { Text } from 'react-native';
import styled, { css } from 'styled-components';

interface CardTitleProps {
  error: boolean;
}

export const CardTitleStyle = styled(Text)<CardTitleProps>`
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
