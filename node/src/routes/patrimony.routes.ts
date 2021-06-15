import { Router } from 'express';

import findPatrimonyService from '../services/patrimony/Find';
import findOnePatrimonyService from '../services/patrimony/FindOne';

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

export default patrimonyRouter;
