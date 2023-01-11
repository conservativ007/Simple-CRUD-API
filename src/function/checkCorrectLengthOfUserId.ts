export function checkCorrectLengthOfUserId(req, res) {
  const { url } = req;

  let lastSlah: string = url.lastIndexOf("/");
  let userId: string = url.slice(lastSlah + 1);

  if (userId.length !== 36) {
    res.statusCode = 400;
    res.end("you must enter valid user id!");
    return;
  }

  return userId;
}
