import express from "express";
import { getColleges } from "../controllers/colleges.js";

const router = express.Router();

router.get("/", getColleges);

export default router;
