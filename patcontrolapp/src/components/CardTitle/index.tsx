import React, { FC } from 'react';

import { CardTitleStyle } from './styles';

interface CardTitleProps {
  error: boolean;
}

const CardTitle: FC<CardTitleProps> = ({ children, error }) => {
  return <CardTitleStyle error={error}>{children}</CardTitleStyle>;
};

export default CardTitle;
