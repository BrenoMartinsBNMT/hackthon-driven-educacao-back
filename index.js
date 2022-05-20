import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api funcionando");
});

app.listen(process.env.PORT);
