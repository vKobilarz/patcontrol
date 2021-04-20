import { View } from 'react-native';
import styled from 'styled-components';

interface CardTitleProps {
  error: boolean;
}

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;
