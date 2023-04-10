import * as S from './styles';

const PageContainer = ({ children }) => {
  return (
    <S.PageContainer>
      <S.PageContent>{children}</S.PageContent>
    </S.PageContainer>
  );
};

export default PageContainer;
