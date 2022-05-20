import { Router } from "express";
import { GetExams } from "../controllers/GetExamsController";

const ExamRouter = Router();

ExamRouter.get("/exams/:token", GetExams);
