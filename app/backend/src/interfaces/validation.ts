import MSG from '../enums/MSG';
import StatusCode from '../enums/statusCode';
import { CodeResponse } from './interface';

const validateEmailLogin = (email: string): CodeResponse => {
  if (!email) return { code: StatusCode.UNAUTHORIZED, message: MSG.FIELDS_NOT_FILLED };
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  if (!emailRegex) return { code: StatusCode.UNAUTHORIZED, message: MSG.INVALID_LOGIN };

  return {};
};

const validatePasswordLogin = (password: string): CodeResponse => {
  if (!password) return { code: StatusCode.UNAUTHORIZED, message: MSG.FIELDS_NOT_FILLED };
  if (password.length < 6) return { code: StatusCode.UNAUTHORIZED, message: MSG.INVALID_LOGIN };

  return {};
};

export default {
  validateEmailLogin,
  validatePasswordLogin,
};
