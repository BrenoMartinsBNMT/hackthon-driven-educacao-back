import { Router } from "express";
import { SignUpController } from "../controllers/SignUpController.js";
import { SignUpMiddleware } from "../middlewares/SignUpMiddleware.js";

const router = Router();

router.post("/SignUp", SignUpMiddleware, SignUpController);
