import { useContext } from 'react';
import { AuthenticationContext } from '../context/Authentication';

const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export default useAuthentication;
