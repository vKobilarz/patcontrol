import { Router } from 'express';

import findRoomService from '../services/rooms/Find';
import findOneRoomService from '../services/rooms/FindOne';
import createRoomService from '../services/rooms/Create';
import updateRoomService from '../services/rooms/Update';
import deleteRoomService from '../services/rooms/Delete';

const roomRouter = Router();

roomRouter.get('/', async (request, response) => {
  const personId = request.person.id;

  const rooms = await findRoomService.execute({ personId });

  response.json(rooms);
});

roomRouter.get('/:id', async (request, response) => {
  const personId = request.person.id;
  const { id } = request.params;

  const room = await findOneRoomService.execute({ id, personId });

  response.json(room);
});

roomRouter.post('/', async (request, response) => {
  const personId = request.person.id;
  const { name } = request.body;

  const room = await createRoomService.execute({ name, personId });

  response.json(room);
});

roomRouter.put('/:id', async (request, response) => {
  const personId = request.person.id;
  const { name } = request.body;
  const { id } = request.params;

  const room = await updateRoomService.execute({ name, id, personId });

  response.json(room);
});

roomRouter.delete('/:id', async (request, response) => {
  const personId = request.person.id;
  const { id } = request.params;

  await deleteRoomService.execute({ id, personId });

  response.status(200).send();
});

export default roomRouter;
