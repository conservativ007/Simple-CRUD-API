"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCorrectLengthOfUserId = void 0;
function checkCorrectLengthOfUserId(req, res) {
    const { url } = req;
    let lastSlah = url.lastIndexOf("/");
    let userId = url.slice(lastSlah + 1);
    if (userId.length !== 36) {
        res.statusCode = 400;
        res.end("you must enter valid user id!");
        return;
    }
    return userId;
}
exports.checkCorrectLengthOfUserId = checkCorrectLengthOfUserId;
//# sourceMappingURL=checkCorrectLengthOfUserId.js.map