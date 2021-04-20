import React, { FC } from 'react';

import { CardBodyStyle } from './styles';

const CardBody: FC = ({ children }) => {
  return <CardBodyStyle>{children}</CardBodyStyle>;
};

export default CardBody;
