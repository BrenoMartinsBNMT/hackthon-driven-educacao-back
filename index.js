import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("api funcionando");
});

app.listen(process.env.PORT);
