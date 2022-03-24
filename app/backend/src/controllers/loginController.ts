import { Request, Response } from 'express';
import StatusCode from '../enums/statusCode';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userLogin = await loginService.login(email, password);

  if (userLogin.message) {
    return res.status(userLogin.code).json({ message: userLogin.message });
  }

  return res.status(StatusCode.OK).json(userLogin);
};

const tokenValidate = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (authorization) {
    const isValid = await loginService.tokenValidate(authorization);

    res.status(StatusCode.OK).json(isValid);
  }
};

export default {
  login,
  tokenValidate,
};
