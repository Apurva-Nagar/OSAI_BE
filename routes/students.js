import express from "express";
import { getStudent, getStudents } from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);

export default router;
