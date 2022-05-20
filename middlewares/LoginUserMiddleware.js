import db from "../db.js";
import bcrypt from "bcrypt";

export async function LoginMiddleware(req, res, next) {
  let { email, password } = req.body;

  if (!password || !email || !req.body) {
    return res.sendStatus(422);
  }

  let { password } = await db.collection("SignUp").findOne({ email });

  if (!bcrypt.compareSync(password, infosUser.password)) {
    return res.send(401);
  }

  next();
}
