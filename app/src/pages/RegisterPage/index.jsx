import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

const RegisterPage = () => {
  const route = useRoute();

  return (
    <>
      <Text>RegisterPage</Text>
      <Text>User ID: {route.params.userId}</Text>
    </>
  );
};

export default RegisterPage;
