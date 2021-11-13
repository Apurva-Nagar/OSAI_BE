export const getStudents = (req, res) => {
  return res.json({ message: "/students Working" });
};

export const getStudent = (req, res) => {
  return res.json({ message: "/students/:id Working" });
};
