"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
const users_1 = require("../users");
function checkUser(res, userId) {
    let user = users_1.users.find((user) => user.id === userId);
    if (user === undefined) {
        res.statusCode = 404;
        res.end("user not found");
        return;
    }
    return user;
}
exports.checkUser = checkUser;
//# sourceMappingURL=checkUser.js.map