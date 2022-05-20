import { Router } from "express";
import { SignUpController } from "../controllers/SignUpController.js";
import { SignUpMiddleware } from "../middlewares/SignUpMiddleware.js";
import { LoginController } from "../controllers/LoginController.js";
import { LoginMiddleware } from "../middlewares/LoginUserMiddleware.js";

const Authrouter = Router();

Authrouter.post("/SignUp", SignUpMiddleware, SignUpController);
Authrouter.post("/SignIn", LoginMiddleware, LoginController);

export default Authrouter;
