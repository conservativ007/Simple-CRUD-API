import { checkCorrectLengthOfUserId } from '../function/checkCorrectLengthOfUserId';
import { responseDeleteAnswer } from '../function/responseAnswer';
import { User } from '../types/types';
import { userService } from '../users';

export function deleteHundler(req, res) {
  let userId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  let user: undefined | User = userService.getOneUser(res, userId);
  if (user === undefined) return;

  userService.deleteUser(userId);
  responseDeleteAnswer(res, 'user was found and deleted');
}
