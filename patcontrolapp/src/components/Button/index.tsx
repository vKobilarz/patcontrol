import React, { FC } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonLabel } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonLabel>{children}</ButtonLabel>
    </Container>
  );
};

export default Button;
