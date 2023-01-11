import { users } from "../users";

export function checkUser(res, userId) {
  let user = users.find((user) => user.id === userId);

  if (user === undefined) {
    res.statusCode = 404;
    res.end("user not found");
    return;
  }

  return user;
}
