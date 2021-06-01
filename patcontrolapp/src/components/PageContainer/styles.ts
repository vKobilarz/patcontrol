import { View } from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  alignItems?: string;
  jusitifyContent?: string;
  flexDirection?: string;
}

export const Container = styled(View)<ContainerProps>`
  flex: 1;
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.jusitifyContent || 'center'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  padding: 0 16px;
`;
