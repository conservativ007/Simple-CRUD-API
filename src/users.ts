import { User } from "./types/types";

export let users = [];

export const changeUsers = {
  putUser: (id: string, data: User): void => {
    let newStore = users.map((user: User) => {
      if (user.id === id) {
        return {
          ...user,
          ...data,
        };
      }
      return user;
    });

    users = newStore;
  },

  deleteUser: (id: string): void => {
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
  },
};
