import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import AUTHENTICATION_TYPE from '../constants/authenticationType';
import LOCAL_STORAGE_KEYS from '../constants/localStorage';

export const AuthenticationContext = createContext({});

const AuthenticationProvider = ({ children }) => {
  const [authenticationData, setAuthenticationData] = useState(() => {
    const authenticationString = localStorage.getItem(
      LOCAL_STORAGE_KEYS.PATCONTROL_AUTHENTICATION_DATA,
    );

    return !!authenticationString ? JSON.parse(authenticationString) : {};
  });

  useEffect(() => {
    const { authenticationType, token, person } = authenticationData;

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.PATCONTROL_AUTHENTICATION_DATA,
      JSON.stringify({ authenticationType, token, person }),
    );
  }, [authenticationData]);

  const authenticate = ({ authenticationType, token, person }) => {
    setAuthenticationData({ authenticationType, token, person });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        ...authenticationData,
        authenticate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
