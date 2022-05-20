import express, { json } from "express";
import cors from "cors";
import authRoutes from "./routers/authRouters.js";

const app = express();

app.use(json());
app.use(cors());
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("api funcionando");
});

app.listen(process.env.PORT);
