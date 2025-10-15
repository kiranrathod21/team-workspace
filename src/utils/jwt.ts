import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

;

export function signAccessToken(payload: object) {
  const options: SignOptions = { 
    expiresIn: (process.env.ACCESS_TOKEN_EXPIRES_IN as string) || '15m' 
  };
  return jwt.sign(payload, ACCESS_SECRET, options);
}

export function signRefreshToken(payload: object) {
  const options: SignOptions = {
    expiresIn: `${process.env.REFRESH_TOKEN_EXPIRES_IN_DAYS || 7}d` as string, 
  };
  return jwt.sign(payload, REFRESH_SECRET, options);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET);
}
