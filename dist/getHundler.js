"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHundler = void 0;
const users_1 = require("./users");
function getHundler(string) {
    if (string.startsWith("/api/users/")) {
        let lastSlah = string.lastIndexOf("/");
        let userId = string.slice(lastSlah + 1);
        return (0, users_1.getUserById)(userId);
    }
    if (string.startsWith("/api/users")) {
        return users_1.users;
    }
}
exports.getHundler = getHundler;
//# sourceMappingURL=getHundler.js.map