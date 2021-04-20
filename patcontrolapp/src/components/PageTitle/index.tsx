import React, { FC } from 'react';

import { Title } from './styles';

const PageTitle: FC = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
