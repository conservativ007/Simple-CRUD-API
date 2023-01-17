import { checkCorrectLengthOfUserId } from '../function/checkCorrectLengthOfUserId';
import { responseSuccessfulAnswer } from '../function/responseAnswer';
import { User } from '../types/types';
import { userService } from '../users';

export function putHundler(req, res) {
  let userId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  if (userId.length === 36) {
    let user: undefined | User = userService.getOneUser(res, userId);
    if (user === undefined) return;

    req.on('data', (chunk) => {
      let newDataOfUser = JSON.parse(chunk);
      let changedUser = userService.putUser(userId, newDataOfUser);

      responseSuccessfulAnswer(res, 200, changedUser);
    });
  }
}
