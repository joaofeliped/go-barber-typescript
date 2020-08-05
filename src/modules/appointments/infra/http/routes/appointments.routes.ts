import { Router } from 'express';

import AppointmentsController from '@modules/appointments/infra/controllers/AppointmentsController';
import ProviderAppointmentsControllers from '@modules/appointments/infra/controllers/ProviderAppointmentsControllers';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsControllers = new ProviderAppointmentsControllers();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsControllers.index);

export default appointmentsRouter;
