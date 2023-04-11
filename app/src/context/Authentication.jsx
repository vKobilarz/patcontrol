import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import LOCAL_STORAGE_KEYS from '../constants/localStorage';
import PatrimonyApi from '../services/patrimonyApi';

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

    if (token) {
      PatrimonyApi.defaults.headers.authorization = `Bearer ${token}`;
    }
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
