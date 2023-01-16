import { checkCorrectLengthOfUserId } from '../function/checkCorrectLengthOfUserId';
import { checkUser } from '../function/checkUser';
import { User } from '../types/types';
import { users } from '../users';

export function getHundler(req, res): void {
  const { url } = req;
  if (url.startsWith('/api/users/')) {
    return getUserById(req, res);
  }
  if (url.startsWith('/api/users')) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  }
}

export function getUserById(req, res): void {
  let isCorretUserId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (isCorretUserId === undefined) return;

  let user: undefined | User = checkUser(res, isCorretUserId);
  if (user === undefined) return;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(user));
}
