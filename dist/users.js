"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUsers = exports.users = void 0;
exports.users = [];
exports.changeUsers = {
    putUser: (id, data) => {
        let newStore = exports.users.map((user) => {
            if (user.id === id) {
                return Object.assign(Object.assign({}, user), data);
            }
            return user;
        });
        exports.users = newStore;
    },
    deleteUser: (id) => {
        const userIndex = exports.users.findIndex((user) => user.id === id);
        exports.users.splice(userIndex, 1);
    },
};
//# sourceMappingURL=users.js.map