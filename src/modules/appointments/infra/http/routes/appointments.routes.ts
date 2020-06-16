import { Router } from 'express';

import AppointmentsController from '@modules/appointments/infra/controllers/AppointmentsController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRoutes = Router();
const appointmentsController = new AppointmentsController();

appointmentsRoutes.use(ensureAuthenticated);

// appointmentsRoutes.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRoutes.post('/', appointmentsController.create);

export default appointmentsRoutes;
