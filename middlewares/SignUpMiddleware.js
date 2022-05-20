export async function SignUpMiddleware(req, res, next) {
  let infosUser = req.body;

  if (
    !infosUser.username ||
    !infosUser.password ||
    !infosUser.email ||
    !infosUser
  ) {
    return res.sendStatus(422);
  }

  next();
}
