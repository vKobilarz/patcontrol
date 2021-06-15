import { Router } from 'express';

import patrimonyRouter from './patrimony.routes';

const routes = Router();

routes.use('/patrimony', patrimonyRouter);

export default routes;
