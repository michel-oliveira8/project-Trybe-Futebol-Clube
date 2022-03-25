import { Request, Response } from 'express';
import MSG from '../enums/MSG';
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

  return res.status(StatusCode.CREATED).json(newMatch);
};

const updateMatch = async (req:Request, res: Response) => {
  const { id } = req.params;
  await matchsService.updateMatch(+id);

  res.status(StatusCode.OK).json({ message: MSG.MATCH_FINISHED });
};

export default {
  getAllMatchs,
  createMatch,
  updateMatch,
};
