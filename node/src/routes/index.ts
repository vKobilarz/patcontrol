import { Router } from 'express';

import personRouter from './person.routes';
import patrimonyRouter from './patrimony.routes';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/person', personRouter);

routes.use(ensureAuthenticated);

routes.use('/patrimony', patrimonyRouter);

export default routes;
