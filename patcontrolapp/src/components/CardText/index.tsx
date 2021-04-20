import React, { FC } from 'react';

import { CardTextStyle } from './styles';

const CardText: FC = ({ children }) => {
  return <CardTextStyle>{children}</CardTextStyle>;
};

export default CardText;
