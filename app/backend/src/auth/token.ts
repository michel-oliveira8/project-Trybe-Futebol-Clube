import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/interface';

const secret = fs.readFileSync('seusecrettoken');

const token = (payload: TokenPayload) => {
  const createToken = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
  return createToken;
};

export default token;
