import { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import PAGES from '../../constants/pages';
import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';

import * as S from './styles';
import { authenticateUser } from '../../services/person';

const LoginPage = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [form, setForm] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({ email: null, password: null });

  const handleFormChange = (name) => (text) => {
    setForm((prevState) => ({ ...prevState, [name]: text }));
  };

  const handleSubmit = async () => {
    const { email, password } = form;

    setFormError({
      email: !!email ? null : 'E-mail obrigatório',
      password: !!password ? null : 'Senha obrigatória',
    });

    if (!email || !password) {
      return;
    }

    try {
      const { data } = await authenticateUser({
        email,
        password,
      });

      setFormError({ email: null, password: null });

      console.log(data);
    } catch (err) {
      const { data } = err.response;

      setFormError((prevState) => ({
        ...prevState,
        password: data.message,
      }));
    }
  };

  return (
    <PageContainer>
      <S.PatControlTitle>PatControl</S.PatControlTitle>
      {params?.registerSuccess ? (
        <S.RegisterSuccessText>
          Cadastro realizado com sucesso! Utilize suas credenciais para entrar.
        </S.RegisterSuccessText>
      ) : (
        <S.LoginText>Entrar</S.LoginText>
      )}
      <S.LoginInput
        onChangeText={handleFormChange('email')}
        placeholder="E-Mail"
        autoFocus
        value={form.email}
        errorMessage={formError.email}
      />
      <S.LoginInput
        onChangeText={handleFormChange('password')}
        placeholder="Senha"
        secureTextEntry
        value={form.password}
        onSubmitEditing={handleSubmit}
        errorMessage={formError.password}
      />
      <Button title="Entrar" type="submit" onPress={handleSubmit} />
      <S.RegisterText>Não possui uma conta?</S.RegisterText>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate(PAGES.REGISTER)}
      />
      <S.OrText>ou</S.OrText>
      <Button title="Continue offline" />
    </PageContainer>
  );
};

export default LoginPage;
