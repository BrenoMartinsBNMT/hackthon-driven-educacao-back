import db from "../db.js";
import bcrypt from "bcrypt";

export async function LoginMiddleware(req, res, next) {
  let infosUser = req.body;

  if (!infosUser.password || !infosUser.email || !req.body) {
    return res.sendStatus(422);
  }
  let { email } = infosUser;
  let { password } = await db.collection("SignUp").findOne({ email });

  if (!bcrypt.compareSync(password, infosUser.password)) {
    return res.send(401);
  }

  next();
}
