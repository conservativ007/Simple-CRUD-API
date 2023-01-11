import { v4 as uuidv4 } from "uuid";
import { users } from "../users";

export function postHundler(req, res): void {
  req.on("error", (err) => {
    console.error(err);
  });

  req
    .on("data", (chunk) => {
      let user = {
        id: uuidv4(),
        ...JSON.parse(chunk),
      };

      users.push(user);
    })
    .on("end", () => {
      res.on("error", (err) => {
        console.error(err);
      });

      res.end(JSON.stringify(users[users.length - 1]));
    });
}
