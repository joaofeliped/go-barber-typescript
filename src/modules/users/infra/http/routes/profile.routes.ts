import { Router } from 'express';

import ProfileController from '@modules/users/infra/controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.create);

export default profileRouter;
