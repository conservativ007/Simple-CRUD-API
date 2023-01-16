import { checkPostBody } from '../function/checkPostBody';
import { users } from '../users';

export function postHundler(req, res): void {
  req.on('error', (err) => {
    console.error(err);
  });

  req
    .on('data', (chunk) => {
      let isCorrectUser = checkPostBody(chunk, res);

      if (isCorrectUser !== false) users.push(isCorrectUser);
    })
    .on('end', () => {
      res.on('error', (err) => {
        console.error(err);
      });

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users[users.length - 1]));
    });
}
