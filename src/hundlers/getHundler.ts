import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { User } from "../types/types";
import { users } from "../users";

export function getHundler(req, res): void {
  const { url } = req;
  if (url.startsWith("/api/users/")) {
    return getUserById(req, res);
  }
  if (url.startsWith("/api/users")) {
    res.statusCode = 200;
    res.end(JSON.stringify(users));

    // console.log("from server", users);
  }
}

export function getUserById(req, res): void {
  let userId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  let user: undefined | User = checkUser(res, userId);
  if (user === undefined) return;

  res.statusCode = 200;
  res.end(JSON.stringify(user));
}
