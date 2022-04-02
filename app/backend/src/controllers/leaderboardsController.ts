import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import leaderboardsService from '../services/leaderboardsService';

const allClassificationHomeClub = async (_req: Request, res: Response) => {
  const result = await leaderboardsService.allClassificationHomeClub();

  res.status(StatusCode.OK).json(result);
};

const allClassificationAwayClub = async (_req: Request, res: Response) => {
  const result = await leaderboardsService.allClassificationAwayClub();

  res.status(StatusCode.OK).json(result);
};

const allClassification = async (_req: Request, res: Response) => {
  const result = await leaderboardsService.allClassification();

  res.status(StatusCode.OK).json(result);
};

export default {
  allClassificationHomeClub,
  allClassificationAwayClub,
  allClassification,
};
