import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 0px 0px 24px;
`;

export const BackToSignInContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #282a36;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  padding: 16px 0;
  border-top-width: 1px;
  border-top-color: #232129;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
