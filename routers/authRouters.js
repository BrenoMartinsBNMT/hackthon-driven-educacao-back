import { Router } from "express";
import { SignUpController } from "../controllers/SignUpController.js";
import { SignUpMiddleware } from "../middlewares/SignUpMiddleware.js";

const Authrouter = Router();

Authrouter.post("/SignUp", SignUpMiddleware, SignUpController);

export default Authrouter;
