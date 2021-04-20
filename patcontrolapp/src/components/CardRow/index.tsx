import React, { FC } from 'react';

import { CardRowStyle } from './styles';

const CardRow: FC = ({ children }) => {
  return <CardRowStyle>{children}</CardRowStyle>;
};

export default CardRow;
