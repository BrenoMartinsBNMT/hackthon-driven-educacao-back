import db from "../db.js";

export async function LoginMiddleware(req, res, next) {
  let { username, password, email } = req.body;
}
