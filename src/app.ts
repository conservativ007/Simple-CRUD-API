import http from 'http';
import { checkMethod } from './function/checkMethod';
import * as dotenv from 'dotenv';

export const server = http.createServer();
const { PORT } = dotenv.config().parsed;

server.on('request', (req, res) => {
  checkMethod(req, res);
});

server.listen(PORT || 3000, () => {
  console.log(`listening for requests on port ${PORT}`);
});
