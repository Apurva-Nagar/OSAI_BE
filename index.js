import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { runSeeder } from "./seeder.js";

import collegeRoutes from "./routes/colleges.js";
import studentRoutes from "./routes/students.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/colleges", collegeRoutes);
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(async () => {
    // await runSeeder();

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT} | http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
