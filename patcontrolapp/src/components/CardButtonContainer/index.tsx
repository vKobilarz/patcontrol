import React, { FC } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { CardContainerStyle } from './styles';

const CardButtonContainer: FC<RectButtonProperties> = ({
  children,
  ...rest
}) => {
  return <CardContainerStyle {...rest}>{children}</CardContainerStyle>;
};

export default CardButtonContainer;
