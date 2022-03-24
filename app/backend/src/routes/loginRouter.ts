import { Router } from 'express';
import validations from '../middleware/validations';
import loginController from '../controllers/loginController';

const loginRouter = Router();

loginRouter.post('/login', validations.validateLogin, loginController.login);

export default loginRouter;
