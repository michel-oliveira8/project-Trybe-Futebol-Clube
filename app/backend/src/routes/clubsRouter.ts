import { Router } from 'express';
import clubsController from '../controllers/clubsController';

const clubsRouter = Router();

clubsRouter.get('/clubs', clubsController.getAllClubs);

export default clubsRouter;
