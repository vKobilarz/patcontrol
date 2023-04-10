import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  color: #202020;
`;

export const PageTitle = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
  font-size: 20px;
  font-weight: 600;
`;

export const BackIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
