import { Router } from 'express';

import SessionsController from '@modules/users/infra/controllers/SessionsController';

const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post('/', sessionsController.create);

export default sessionsRoutes;
