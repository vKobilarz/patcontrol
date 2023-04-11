import styled from 'styled-components/native';

export const Card = styled.View`
  border: 1px solid #aaa;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 32px 32px;
  shadow-color: #202020;
  shadow-offset: -4px 8px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

export const CardHeader = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 13px;
`;

export const CardRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardRowKey = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const CardRowValue = styled.Text`
  font-size: 16px;
`;
