import { Router } from 'express';

import createUserUservice from '../services/person/Create';
import authenticateUserservice from '../services/person/Authenticate';

const personRouter = Router();

personRouter.post('/', async (request, response) => {
  const { email, name, password } = request.body;

  const person = await createUserUservice.execute({ email, name, password });

  response.json(person);
});

personRouter.post('/authenticate', async (request, response) => {
  const { email, password } = request.body;

  const session = await authenticateUserservice.execute({ email, password });

  response.json(session);
});

export default personRouter;
