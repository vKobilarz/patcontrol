import PatrimonyApi from './patrimonyApi';

export const getAllRooms = async () => {
  return await PatrimonyApi.get('/room');
};
