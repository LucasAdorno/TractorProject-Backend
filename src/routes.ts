import * as express from 'express';

import UsersController from './controllers/UsersController';

const routes = express.Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

export default routes;

