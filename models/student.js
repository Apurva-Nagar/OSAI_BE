import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  batchYear: {
    type: Number,
    required: true,
  },
  collegeId: {
    type: Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  skills: {
    type: [String],
    validate: (arr) => Array.isArray(arr) && arr.length > 0,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
