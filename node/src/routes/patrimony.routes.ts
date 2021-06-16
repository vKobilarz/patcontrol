import { Router } from 'express';

import findPatrimonyService from '../services/patrimony/Find';
import findOnePatrimonyService from '../services/patrimony/FindOne';
import createPatrimonyService from '../services/patrimony/Create';
import updatePatrimonyService from '../services/patrimony/Update';
import deletePatrimonyService from '../services/patrimony/Delete';

const patrimonyRouter = Router();

patrimonyRouter.get('/', async (request, response) => {
  const personId = request.person.id;

  const patrimonies = await findPatrimonyService.execute({ personId });

  response.json(patrimonies);
});

patrimonyRouter.get('/:id', async (request, response) => {
  const personId = request.person.id;
  const { id } = request.params;

  const patrimony = await findOnePatrimonyService.execute({ id, personId });

  response.json(patrimony);
});

patrimonyRouter.post('/', async (request, response) => {
  const personId = request.person.id;
  const {
    description,
    number,
    rfid,
    last_scanned_date,
    last_found_date,
    room_id,
  } = request.body;

  const patrimony = await createPatrimonyService.execute({
    description,
    number,
    rfid,
    last_scanned_date,
    last_found_date,
    room_id,
    personId,
  });

  response.json(patrimony);
});

patrimonyRouter.put('/:id', async (request, response) => {
  const personId = request.person.id;
  const { id } = request.params;
  const {
    description,
    number,
    rfid,
    last_scanned_date,
    last_found_date,
    room_id,
  } = request.body;

  const patrimony = await updatePatrimonyService.execute({
    id,
    description,
    number,
    rfid,
    last_scanned_date,
    last_found_date,
    room_id,
    personId,
  });

  response.json(patrimony);
});

patrimonyRouter.delete('/:id', async (request, response) => {
  const personId = request.person.id;
  const { id } = request.params;

  await deletePatrimonyService.execute({
    id,
    personId,
  });

  response.status(200).send();
});

export default patrimonyRouter;
