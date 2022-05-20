import express, { json } from "express";
import cors from "cors";
import Authrouter from "./routers/authRouters.js";

const app = express();

app.use(json());
app.use(cors());
app.use(Authrouter);

app.get("/", (req, res) => {
  res.send("api funcionando");
});

app.listen(process.env.PORT);
