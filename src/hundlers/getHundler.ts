import { checkCorrectLengthOfUserId } from '../function/checkCorrectLengthOfUserId';
import {
  responseNotfoundAnswer,
  responseSuccessfulAnswer,
} from '../function/responseAnswer';
import { User } from '../types/types';
import { userService } from '../users';

export function getHundler(req, res): void {
  const { url } = req;

  let lastSlashIndexOfUrl = url.lastIndexOf('/');

  if (url.startsWith('/api/users/') && lastSlashIndexOfUrl === 10) {
    return getUserById(req, res);
  }
  if (url === '/api/users') {
    responseSuccessfulAnswer(res, 200, userService.getAllUsers());
    return;
  }
  responseNotfoundAnswer(res, 'You must eneter valid url');
}

export function getUserById(req, res): void {
  let isCorretUserId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (isCorretUserId === undefined) return;

  let user: undefined | User = userService.getOneUser(res, isCorretUserId);
  if (user === undefined) return;
  responseSuccessfulAnswer(res, 200, user);
}
