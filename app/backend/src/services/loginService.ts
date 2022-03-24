import * as bcrypt from 'bcryptjs';
import StatusCode from '../enums/statusCode';
import Users from '../database/models/users';
import MSG from '../enums/MSG';
import token from '../auth/token';

const login = async (userEmail:string, password:string) => {
  const userLogin = await Users.findOne({ where: { email: userEmail } });

  if (!userLogin) {
    return { code: StatusCode.UNAUTHORIZED, message: MSG.INVALID_LOGIN };
  }

  const tokenLogin = await bcrypt.compare(password, userLogin.password);

  if (tokenLogin) {
    const { id, username, role, email } = userLogin;
    const getToken = token({ id, email });
    return {
      user: { id, username, role, email },
      token: getToken,
    };
  }
  return { code: StatusCode.UNAUTHORIZED, message: MSG.INVALID_LOGIN };
};

export default {
  login,
};
