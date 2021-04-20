import React, { FC } from 'react';

import { TitleContainer } from './styles';

const PageTitleContainer: FC = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default PageTitleContainer;
