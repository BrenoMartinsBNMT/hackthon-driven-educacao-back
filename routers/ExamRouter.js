import { Router } from "express";
import { GetExams } from "../controllers/GetExamsController.js";

const ExamRouter = Router();

ExamRouter.get("/exams/:token", GetExams);

export default ExamRouter;
