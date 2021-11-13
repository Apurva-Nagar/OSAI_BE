import mongoose from "mongoose";
import College from "../models/college.js";

export const getColleges = async (req, res) => {
  try {
    const colleges = await College.find({});
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

export const getCollegeDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ errors: ["Invalid College ID"] });
  }

  try {
    const college = await College.findById(id);

    if (!college)
      return res.status(404).json({ errors: ["College Not Found"] });

    const { state, country, studentCount, courses } = college;

    const similarColleges = await College.find({
      _id: { $ne: id },
      state: state,
      country: country,
      studentCount: { $gte: studentCount - 100, $lte: studentCount + 100 },
      courses: { $in: courses },
    });

    res.status(200).json({ college, similarColleges });
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};
