import mongoose from "mongoose";

const collegeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearFounded: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  studentCount: {
    type: String,
    required: true,
  },
  courses: {
    type: [String],
    validate: (arr) => Array.isArray(arr) && arr.length > 0,
  },
});

const College = mongoose.model("College", collegeSchema);

export default College;
