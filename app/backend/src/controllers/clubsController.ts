import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import clubsService from '../services/clubsService';

const getAllClubs = async (_req: Request, res: Response) => {
  const result = await clubsService.getAllClubs();

  res.status(StatusCode.OK).json(result);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getClubId = await clubsService.getById(+id);

  return res.status(StatusCode.OK).json(getClubId);
};

export default {
  getAllClubs,
  getById,
};
