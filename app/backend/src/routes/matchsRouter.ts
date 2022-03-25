import { Router } from 'express';
import matchsController from '../controllers/matchsController';

const matchsRouter = Router();

matchsRouter.get('/matchs', matchsController.getAllMatchs);
matchsRouter.post('/matchs', matchsController.createMatch);
matchsRouter.patch('/matchs/:id/finish', matchsController.updateMatch);
export default matchsRouter;
