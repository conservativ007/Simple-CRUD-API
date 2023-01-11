"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMethod = void 0;
const deleteHundler_1 = require("../hundlers/deleteHundler");
const getHundler_1 = require("../hundlers/getHundler");
const postHundler_1 = require("../hundlers/postHundler");
const putHundler_1 = require("../hundlers/putHundler");
function checkMethod(req, res) {
    if (req.url.startsWith("/api/users") !== true) {
        res.statusCode = 404;
        res.end("you must enter valid url string");
    }
    if (req.method === "GET")
        return (0, getHundler_1.getHundler)(req, res);
    if (req.method === "POST")
        return (0, postHundler_1.postHundler)(req, res);
    if (req.method === "PUT")
        return (0, putHundler_1.putHundler)(req, res);
    if (req.method === "DELETE")
        return (0, deleteHundler_1.deleteHundler)(req, res);
}
exports.checkMethod = checkMethod;
//# sourceMappingURL=checkMethod.js.map