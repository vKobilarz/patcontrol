import PatrimonyApi from './patrimonyApi';

export const getPatrimonyById = (id) => {
  return PatrimonyApi.get(`/patrimony/${id}`);
};
