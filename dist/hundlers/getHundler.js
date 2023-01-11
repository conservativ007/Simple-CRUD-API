"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getHundler = void 0;
const checkCorrectLengthOfUserId_1 = require("../function/checkCorrectLengthOfUserId");
const checkUser_1 = require("../function/checkUser");
const users_1 = require("../users");
function getHundler(req, res) {
    const { url } = req;
    if (url.startsWith("/api/users/")) {
        return getUserById(req, res);
    }
    if (url.startsWith("/api/users")) {
        res.statusCode = 200;
        res.end(JSON.stringify(users_1.users));
    }
}
exports.getHundler = getHundler;
// export function getUserById(id: string, res) {
function getUserById(req, res) {
    let userId = (0, checkCorrectLengthOfUserId_1.checkCorrectLengthOfUserId)(req, res);
    if (userId === undefined)
        return;
    let user = (0, checkUser_1.checkUser)(res, userId);
    if (user === undefined)
        return;
    res.statusCode = 200;
    res.end(JSON.stringify(user));
}
exports.getUserById = getUserById;
//# sourceMappingURL=getHundler.js.map