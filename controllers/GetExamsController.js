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

  let exams = await db.collection("exams").find({});

  if (!exams) {
    res.send("Ainda não temos nemhuma pergunta :(");
  }

  res.send(exams);
}
