export async function SignUpMiddleware(req, res, next) {
  let infosUser = req.body;

  if (
    infosUser.username.trim() ||
    infosUser.password.trim() ||
    infosUser.email() ||
    !infosUser
  ) {
    return res.sendStatus(422);
  }

  next();
}
