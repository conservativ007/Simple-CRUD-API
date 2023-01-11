"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHundler = void 0;
const uuid_1 = require("uuid");
const users_1 = require("../users");
function postHundler(req, res) {
    req.on("error", (err) => {
        console.error(err);
    });
    req
        .on("data", (chunk) => {
        let user = Object.assign({ id: (0, uuid_1.v4)() }, JSON.parse(chunk));
        users_1.users.push(user);
    })
        .on("end", () => {
        res.on("error", (err) => {
            console.error(err);
        });
        res.end(JSON.stringify(users_1.users[users_1.users.length - 1]));
    });
}
exports.postHundler = postHundler;
//# sourceMappingURL=postHundler.js.map