import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import clubsService from '../services/clubsService';

const getAllClubs = async (_req: Request, res: Response) => {
  const result = await clubsService.getAllClubs();

  res.status(StatusCode.OK).json(result);
};

export default {
  getAllClubs,
};
