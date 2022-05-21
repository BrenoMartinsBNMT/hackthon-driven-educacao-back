import db from "../db.js";
import bcrypt from "bcrypt";

export async function LoginMiddleware(req, res, next) {
  let infosUser = req.body;

  if (!infosUser.password || !infosUser.email || !req.body) {
    return res.sendStatus(422);
  }
  let { email } = infosUser;
  let loginUser = await db.collection("SignUp").find({ email });

  if (!bcrypt.compareSync(loginUser.password, infosUser.password)) {
    return res.send(401);
  }

  next();
}
