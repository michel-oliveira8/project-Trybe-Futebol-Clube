import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import leaderboardsService from '../services/leaderboardsService';

const allClassification = async (_req: Request, res: Response) => {
  const result = await leaderboardsService.allClassification();

  res.status(StatusCode.OK).json(result);
};

export default {
  allClassification,
};
