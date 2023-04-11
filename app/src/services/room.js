import PatrimonyApi from './patrimonyApi';

export const getAllRooms = async () => {
  return await PatrimonyApi.get('/room');
};

export const getRoomById = async (id) => {
  return await PatrimonyApi.get(`/room/${id}`);
};
