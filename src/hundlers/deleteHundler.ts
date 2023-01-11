import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { User } from "../types/types";
import { changeUsers } from "../users";

export function deleteHundler(req, res) {
  let userId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  let user: undefined | User = checkUser(res, userId);
  if (user === undefined) return;

  changeUsers.deleteUser(userId);
  res.statusCode = 204;
  res.end("user was found and deleted");
}
