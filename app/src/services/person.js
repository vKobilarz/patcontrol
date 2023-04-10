import PatrimonyApi from './patrimonyApi';

export const authenticateUser = async ({ email, password }) => {
  return PatrimonyApi.post('/person/authenticate', { email, password });
};

export const createUser = async ({ email, password, name }) => {
  return PatrimonyApi.post('/person', { email, password, name });
};
