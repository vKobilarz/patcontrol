import * as S from './styles';

export const CardRow = ({ title, children }) => {
  return (
    <S.CardRowContainer>
      <S.CardRowKey>{title}</S.CardRowKey>
      <S.CardRowValue>{children}</S.CardRowValue>
    </S.CardRowContainer>
  );
};

export const CardHeader = S.CardHeader;
export default S.Card;
