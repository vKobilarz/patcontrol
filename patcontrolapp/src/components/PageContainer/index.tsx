import React, { FC } from 'react';

import { Container } from './styles';

interface PageContainer {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}

const PageContainer: FC<PageContainer> = ({
  children,
  alignItems,
  justifyContent,
  flexDirection,
}) => {
  return (
    <Container
      alignItems={alignItems}
      jusitifyContent={justifyContent}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
