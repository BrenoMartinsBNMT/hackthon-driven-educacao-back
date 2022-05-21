import db from "../db.js";

export async function GetExams(req, res) {
  let infosUser = req.params;

  if (!infosUser) {
    return res.sendStatus(422);
  }

  let { token } = infosUser;

  let hasloged = await db.collection("login").findOne({ token });

  if (!hasloged) {
    return res.sendStatus(401);
  }
  let { email } = hasloged;
  let { username } = await db.collection("signUp").findOne({ email });
  let exams = await db.collection("exams").find({}).toArray();

  if (!exams) {
    res.send("Ainda não temos nemhuma pergunta :(");
  }
  let gambiarra = { exams, username };
  res.send(gambiarra);
}
