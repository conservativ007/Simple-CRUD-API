import { checkCorrectLengthOfUserId } from "../function/checkCorrectLengthOfUserId";
import { checkUser } from "../function/checkUser";
import { changeUsers } from "../users";

export function putHundler(req, res) {
  let userId = checkCorrectLengthOfUserId(req, res);
  if (userId === undefined) return;

  if (userId.length === 36) {
    let user = checkUser(res, userId);
    if (user === undefined) return;

    req.on("data", (chunk) => {
      let newDataOfUser = JSON.parse(chunk);
      changeUsers.putUser(userId, newDataOfUser);

      let user = {
        userId,
        ...newDataOfUser,
      };

      res.statusCode = 200;
      res.end(JSON.stringify(user));
    });
  }
}
