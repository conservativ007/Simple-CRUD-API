"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHundler = void 0;
const checkCorrectLengthOfUserId_1 = require("../function/checkCorrectLengthOfUserId");
const checkUser_1 = require("../function/checkUser");
const users_1 = require("../users");
function deleteHundler(req, res) {
    let userId = (0, checkCorrectLengthOfUserId_1.checkCorrectLengthOfUserId)(req, res);
    if (userId === undefined)
        return;
    let user = (0, checkUser_1.checkUser)(res, userId);
    if (user === undefined)
        return;
    users_1.changeUsers.deleteUser(userId);
    res.statusCode = 204;
    res.end("user was found and deleted");
}
exports.deleteHundler = deleteHundler;
//# sourceMappingURL=deleteHundler.js.map