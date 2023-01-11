"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putHundler = void 0;
const checkCorrectLengthOfUserId_1 = require("../function/checkCorrectLengthOfUserId");
const checkUser_1 = require("../function/checkUser");
const users_1 = require("../users");
function putHundler(req, res) {
    let userId = (0, checkCorrectLengthOfUserId_1.checkCorrectLengthOfUserId)(req, res);
    if (userId === undefined)
        return;
    if (userId.length === 36) {
        let user = (0, checkUser_1.checkUser)(res, userId);
        if (user === undefined)
            return;
        req.on("data", (chunk) => {
            let newDataOfUser = JSON.parse(chunk);
            users_1.changeUsers.putUser(userId, newDataOfUser);
            let user = Object.assign({ userId }, newDataOfUser);
            res.statusCode = 200;
            res.end(JSON.stringify(user));
        });
    }
}
exports.putHundler = putHundler;
//# sourceMappingURL=putHundler.js.map