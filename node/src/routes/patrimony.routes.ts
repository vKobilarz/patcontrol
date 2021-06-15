import { Router } from 'express';

import findPatrimonyService from '../services/patrimony/Find';
import findOnePatrimonyService from '../services/patrimony/FindOne';

const patrimonyRouter = Router();

patrimonyRouter.get('/', async (request, response) => {
  const patrimonies = await findPatrimonyService.execute();

  response.json(patrimonies);
});

patrimonyRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const patrimony = await findOnePatrimonyService.execute({ id });

  response.json(patrimony);
});

export default patrimonyRouter;
