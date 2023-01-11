"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const checkMethod_1 = require("./function/checkMethod");
const server = http_1.default.createServer();
// server.on("connection", (connection) => {
//   console.log("someone just connected");
// });
server.on("request", (req, res) => {
    (0, checkMethod_1.checkMethod)(req, res);
});
server.on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});
server.listen(3000, () => {
    console.log(`listening for requests on port 3000`);
});
//# sourceMappingURL=app.js.map