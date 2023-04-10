import 'reflect-metadata';
import express from 'express';

import cors from 'cors';

import 'express-async-errors';

import uploadConfig from './config/upload';

import './database';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server started at port 3333!');
});
