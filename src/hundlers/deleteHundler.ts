import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { changeUsers } from "../users";

export function deleteHundler(req, res) {
  let userId = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  let user = checkUser(res, userId);
  if (user === undefined) return;

  changeUsers.deleteUser(userId);
  res.statusCode = 204;
  res.end("user was found and deleted");
}
