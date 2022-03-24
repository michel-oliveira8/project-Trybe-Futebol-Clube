import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import matchsService from '../services/matchsService';

const getAllMatchs = async (_req: Request, res: Response) => {
  const result = await matchsService.getAllMatchs();

  res.status(StatusCode.OK).json(result);
};

export default {
  getAllMatchs,
};
