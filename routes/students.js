import express from "express";
import { getStudent, getCollegeStudents } from "../controllers/students.js";

const router = express.Router();

router.get("/", getCollegeStudents);
router.get("/:id", getStudent);

export default router;
