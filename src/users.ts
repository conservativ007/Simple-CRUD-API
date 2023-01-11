export let users = [];

export const changeUsers = {
  putUser: (id, data) => {
    let newStore = users.map((user) => {
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

  deleteUser: (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
  },
};
