import { v4 as uuidv4 } from "uuid";
import db from "../db.js";

export async function LoginController(req, res) {
  let { email } = req.body;

  await db.collection("login").deleteOne({ email });

  let token = uuidv4();

  await db.collection("login").insertOne({ email, token });

  res.send(token);
}
