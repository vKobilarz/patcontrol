import * as S from './styles';

const PageAction = ({ children, ...others }) => {
  return (
    <S.Button {...others}>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
};

export default PageAction;
