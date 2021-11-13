import express from "express";
import { getColleges, getCollegeDetails } from "../controllers/colleges.js";

const router = express.Router();

router.get("/", getColleges);
router.get("/:id", getCollegeDetails);

export default router;
