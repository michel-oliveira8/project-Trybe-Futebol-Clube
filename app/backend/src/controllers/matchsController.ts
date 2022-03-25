import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import matchsService from '../services/matchsService';

const getAllMatchs = async (_req: Request, res: Response) => {
  const result = await matchsService.getAllMatchs();

  res.status(StatusCode.OK).json(result);
};

const createMatch = async (req: Request, res: Response) => {
  const match = req.body;
  const newMatch = await matchsService.createMatch(match);

  if (newMatch.code) {
    return res.status(newMatch.code).json({ message: newMatch.message });
  }

  return res.status(StatusCode.OK).json(newMatch);
};

export default {
  getAllMatchs,
  createMatch,
};
