import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
const app = express();

import HomeRouter from './router/home';
import UserRouter from './router/user';

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.use('/', HomeRouter);
app.use('/user', UserRouter);

export default app;