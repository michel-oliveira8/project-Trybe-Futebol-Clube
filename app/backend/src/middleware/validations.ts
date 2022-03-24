import { NextFunction, Request, Response } from 'express';
import { Login } from '../interfaces/interface';
import validation from '../interfaces/validation';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as Login;

  const validationEmail = validation.validateEmailLogin(email);
  if (validationEmail.code) {
    return res.status(validationEmail.code).json({ message: validationEmail.message });
  }

  const validationPassword = validation.validatePasswordLogin(password);
  if (validationPassword.code) {
    return res.status(validationPassword.code).json({ message: validationPassword.message });
  }

  next();
};

export default {
  validateLogin,
};
