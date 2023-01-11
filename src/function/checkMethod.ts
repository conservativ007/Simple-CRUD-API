import { deleteHundler } from "../hundlers/deleteHundler";
import { getHundler } from "../hundlers/getHundler";
import { postHundler } from "../hundlers/postHundler";
import { putHundler } from "../hundlers/putHundler";

export function checkMethod(req, res) {
  if (req.url.startsWith("/api/users") !== true) {
    res.statusCode = 404;
    res.end("you must enter valid url string");
  }
  if (req.method === "GET") return getHundler(req, res);
  if (req.method === "POST") return postHundler(req, res);
  if (req.method === "PUT") return putHundler(req, res);
  if (req.method === "DELETE") return deleteHundler(req, res);
}
