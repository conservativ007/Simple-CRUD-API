import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { users } from "../users";

export function getHundler(req, res) {
  const { url } = req;
  if (url.startsWith("/api/users/")) {
    return getUserById(req, res);
  }
  if (url.startsWith("/api/users")) {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  }
}

// export function getUserById(id: string, res) {
export function getUserById(req, res) {
  let userId = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  let user = checkUser(res, userId);
  if (user === undefined) return;

  res.statusCode = 200;
  res.end(JSON.stringify(user));
}
