import { checkPostBody } from "../function/checkPostBody";
import { users } from "../users";

export function postHundler(req, res): void {
  req.on("error", (err) => {
    console.error(err);
  });

  req
    .on("data", (chunk) => {
      // console.log("chunk", JSON.parse(chunk));
      let isCorrectUser = checkPostBody(chunk, res);

      if (isCorrectUser !== false) users.push(isCorrectUser);
    })
    .on("end", () => {
      res.on("error", (err) => {
        console.error(err);
      });

      res.end(JSON.stringify(users[users.length - 1]));
    });
}
