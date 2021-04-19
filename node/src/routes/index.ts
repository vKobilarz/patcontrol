import { Router } from 'express';

import tagRouter from './tag.routes';

const routes = Router();

routes.use('/tag', tagRouter);

export default routes;
