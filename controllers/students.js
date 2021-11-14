import mongoose from "mongoose";
import Student from "../models/student.js";

export const getCollegeStudents = async (req, res) => {
  const { collegeId } = req.query;

  if (!mongoose.Types.ObjectId.isValid(collegeId)) {
    return res.status(400).json({ errors: ["Invalid College ID"] });
  }

  try {
    const students = await Student.find({ collegeId });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

export const getStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ errors: ["Invalid Student ID"] });
  }

  try {
    const student = await Student.findById(id).populate("collegeId");
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};
