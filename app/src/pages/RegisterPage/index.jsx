import { Button } from 'react-native';

import * as S from './styles';
import PageHeader from '../../components/PageHeader';
import PageContainer from '../../components/PageContainer';
import { useState } from 'react';
import { createUser } from '../../services/person';
import { useNavigation } from '@react-navigation/native';
import PAGES from '../../constants/pages';

const RegisterPage = () => {
  const { navigate } = useNavigation();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [formError, setFormError] = useState({
    name: null,
    email: null,
    password: null,
  });

  const handleFormChange = (name) => (text) => {
    setForm((prevState) => ({ ...prevState, [name]: text }));
  };

  const handleSubmit = async () => {
    const { email, password, name } = form;

    setFormError({
      email: !!email ? null : 'E-mail obrigatório',
      password: !!password ? null : 'Senha obrigatória',
      name: !!name ? null : 'Nome obrigatório',
    });

    if (!email || !password || !name) {
      return;
    }

    try {
      const { status } = await createUser({ email, password, name });

      if (status === 200) {
        navigate(PAGES.LOGIN, { registerSuccess: true });
      }
    } catch (err) {
      const { data } = err.response;

      setFormError((prevState) => ({
        ...prevState,
        password: data.message,
      }));
    }
  };

  return (
    <>
      <PageHeader title="Cadastro" />
      <PageContainer>
        <S.RegisterInput
          onChangeText={handleFormChange('name')}
          placeholder="Nome"
          value={form.name}
          errorMessage={formError.name}
          autoFocus
        />
        <S.RegisterInput
          onChangeText={handleFormChange('email')}
          placeholder="E-Mail"
          value={form.email}
          errorMessage={formError.email}
        />
        <S.RegisterInput
          onChangeText={handleFormChange('password')}
          placeholder="Senha"
          value={form.password}
          errorMessage={formError.password}
          onSubmitEditing={handleSubmit}
          secureTextEntry
        />
        <Button title="Cadastrar" onPress={handleSubmit} />
      </PageContainer>
    </>
  );
};

export default RegisterPage;
