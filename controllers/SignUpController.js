import db from "../db.js";
import bcrypt from "bcrypt";

export async function SignUpController(req, res) {
  let { username, email, password } = req.body;

  await db
    .collection("signUp")
    .insertOne({ username, email, password: bcrypt.hashSync(password, 10) });

  res.sendStatus(201);
}
