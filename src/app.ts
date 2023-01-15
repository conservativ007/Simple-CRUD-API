import http from "http";
import { checkMethod } from "./function/checkMethod";
import * as dotenv from "dotenv";

export const server = http.createServer();
const { PORT } = dotenv.config().parsed;

// server.on("connection", (connection) => {
//   console.log("someone just connected");
// });

server.on("request", (req, res) => {
  checkMethod(req, res);
});

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

server.listen(PORT || 3000, () => {
  console.log(`listening for requests on port ${PORT}`);
});
