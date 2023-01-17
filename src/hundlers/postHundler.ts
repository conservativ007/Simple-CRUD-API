import { checkPostBody } from '../function/checkPostBody';
import { responseSuccessfulAnswer } from '../function/responseAnswer';
import { userService } from '../users';

export function postHundler(req, res): void {
  req.on('error', (err) => {
    console.error(err);
  });

  req
    .on('data', (chunk) => {
      let isCorrectUser = checkPostBody(chunk, res);

      if (isCorrectUser !== false) userService.addUser(isCorrectUser);
    })
    .on('end', () => {
      res.on('error', (err) => {
        console.error(err);
      });

      responseSuccessfulAnswer(res, 201, userService.getLastUser());
    });
}
