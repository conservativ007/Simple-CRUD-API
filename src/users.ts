import { User } from './types/types';

let users = [];

export const userService = {
  getAllUsers: (): User[] => {
    return users;
  },

  getOneUser: (res, id: string): User => {
    let user = users.find((user) => user.id === id);

    if (user === undefined) {
      res.statusCode = 404;
      res.end('user not found');
      return;
    }

    return user;
  },

  addUser: (newUser: User): void => {
    users.push(newUser);
  },

  getLastUser: (): User => {
    return users[users.length - 1];
  },

  putUser: (id: string, data: User): User => {
    let newUser: User;

    let newStore = users.map((user: User) => {
      if (user.id === id) {
        newUser = {
          ...user,
          ...data,
        };
        return newUser;
      }
      return user;
    });

    users = newStore;
    return newUser;
  },

  deleteUser: (id: string): void => {
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
  },
};
