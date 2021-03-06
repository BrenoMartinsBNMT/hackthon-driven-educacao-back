import express, { json } from "express";
import cors from "cors";
import Authrouter from "./routers/authRouters.js";
import ExamRouter from "./routers/ExamRouter.js";
const app = express();

app.use(json());
app.use(cors());
app.use(Authrouter);
app.use(ExamRouter);

app.get("/", (req, res) => {
  res.send("api funcionando");
});

app.listen(process.env.PORT);
