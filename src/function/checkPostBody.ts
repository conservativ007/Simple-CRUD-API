import { User } from "../types/types";
import { v4 as uuidv4 } from "uuid";

export function checkPostBody(data, res) {
  let name, age, hobbies, user;

  // this try catch statment checks the correct request body
  try {
    user = {
      id: uuidv4(),
      ...JSON.parse(data),
    };

    name = user.username;
    age = user.age;
    hobbies = user.hobbies;
  } catch (error) {
    res.statusCode = 500;
    res.end("something went wrong");

    return false;
  }

  let isName = typeof name === "string" ? true : false;
  let isAge = typeof age === "number" ? true : false;
  let isHobbies = Array.isArray(hobbies);

  if (isName === false || isAge === false || isHobbies === false) {
    res.statusCode = 400;
    res.end("you must enter valid fields");
    return false;
  }

  return user;
}
