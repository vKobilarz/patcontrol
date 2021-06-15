import { Router } from 'express';

import personRouter from './person.routes';
import patrimonyRouter from './patrimony.routes';

const routes = Router();

routes.use('/person', personRouter);
routes.use('/patrimony', patrimonyRouter);

export default routes;
