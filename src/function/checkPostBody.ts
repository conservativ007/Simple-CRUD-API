import { User } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

export function checkPostBody(data, res) {
  let user;

  // this try catch statment checks the correct request body
  try {
    user = {
      id: uuidv4(),
      ...JSON.parse(data),
    };
  } catch (error) {
    res.statusCode = 500;
    res.end('something went wrong');

    return false;
  }

  let isCorrectName = typeof user.username === 'string' ? true : false;
  let isCorrectAge = typeof user.age === 'number' ? true : false;
  let isCorrectHobbies = Array.isArray(user.hobbies);

  if (
    isCorrectName === false ||
    isCorrectAge === false ||
    isCorrectHobbies === false
  ) {
    res.statusCode = 400;
    res.end('you must enter valid fields');
    return false;
  }

  return user;
}
