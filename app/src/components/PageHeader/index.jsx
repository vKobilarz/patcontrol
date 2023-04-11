import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { Image, Text } from 'react-native';

import BackIcon from '../../assets/back.svg';

const PageHeader = ({ title, isBackHidden }) => {
  const { goBack, canGoBack } = useNavigation();

  const handleBackPress = () => {
    goBack();
  };

  return (
    <S.Container>
      {!isBackHidden && (
        <S.BackButton disabled={!canGoBack()} onPress={handleBackPress}>
          <S.BackIcon source={{ uri: BackIcon }} />
        </S.BackButton>
      )}
      <S.PageTitle>{title}</S.PageTitle>
    </S.Container>
  );
};

export default PageHeader;
