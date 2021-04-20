import React, { FC } from 'react';

import { CardContainerStyle } from './styles';

const CardContainer: FC = ({ children }) => {
  return <CardContainerStyle>{children}</CardContainerStyle>;
};

export default CardContainer;
