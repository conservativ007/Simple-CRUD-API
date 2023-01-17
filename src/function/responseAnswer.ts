import { User } from '../types/types';

export function responseSuccessfulAnswer(
  res,
  code: number,
  user: User | User[]
) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
}

export function responseNotfoundAnswer(res, message: string) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: message }));
}

export function responseDeleteAnswer(res, message: string) {
  res.statusCode = 204;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: message }));
}
