import { Router } from 'express';
import leaderboardsController from '../controllers/leaderboardsController';

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard/home', leaderboardsController.allClassification);

export default leaderboardRouter;
