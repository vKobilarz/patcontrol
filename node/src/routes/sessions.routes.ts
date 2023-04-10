import { Router } from 'express';

import AuthenticatePersonService from '../services/person/Authenticate';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const { person, token } = await AuthenticatePersonService.execute({
    email,
    password,
  });

  return response.json({ user: person, token });
});

export default sessionRouter;
