import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { User } from "../types/types";
import { changeUsers } from "../users";

export function putHundler(req, res) {
  let userId: undefined | string = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  if (userId.length === 36) {
    let user: undefined | User = checkUser(res, userId);
    if (user === undefined) return;

    req.on("data", (chunk) => {
      let newDataOfUser = JSON.parse(chunk);
      changeUsers.putUser(userId, newDataOfUser);

      let user: User = {
        userId,
        ...newDataOfUser,
      };

      res.statusCode = 200;
      res.end(JSON.stringify(user));
    });
  }
}
