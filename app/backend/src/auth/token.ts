import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import { Token } from '../interfaces/interface';

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const token = (payload: Token) => {
  const createToken = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
  return createToken;
};

export default token;
