import { View } from 'react-native';

import * as S from './styles';

const Input = ({ errorMessage, style, ...props }) => {
  return (
    <View style={style}>
      <S.Input {...props} />
      {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </View>
  );
};

export default Input;
