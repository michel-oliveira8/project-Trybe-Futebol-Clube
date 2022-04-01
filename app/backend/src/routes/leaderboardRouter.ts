import { Router } from 'express';
import leaderboardsController from '../controllers/leaderboardsController';

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard/home', leaderboardsController.allClassificationHomeClub);

leaderboardRouter.get('/leaderboard/away', leaderboardsController.allClassificationAwayClub);

export default leaderboardRouter;
