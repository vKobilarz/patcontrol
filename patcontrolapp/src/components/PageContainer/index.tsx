import React, { FC } from 'react';

import { Container } from './styles';

const PageContainer: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
