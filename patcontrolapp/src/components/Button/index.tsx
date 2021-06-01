import React, { FC } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ButtonLabel } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  iconName?: string;
  bottomGutter?: boolean;
}

const Button: FC<ButtonProps> = ({ children, iconName, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonLabel>{children}</ButtonLabel>
      {iconName && <Icon name={iconName} size={20} color="#fff" />}
    </Container>
  );
};

export default Button;
