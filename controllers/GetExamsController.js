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
  console.log();
  shuffle(exams[0].alternativas);
  if (!exams) {
    res.send("Ainda não temos nemhuma pergunta :(");
  }
  let gambiarra = { exams, username };
  res.send(gambiarra);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
