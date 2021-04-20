import React, { FC } from 'react';

import { CardContainerStyle } from './styles';

const CardContainer: FC = ({ children, ...rest }) => {
  return <CardContainerStyle {...rest}>{children}</CardContainerStyle>;
};

export default CardContainer;
