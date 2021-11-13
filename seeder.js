import College from "./models/college.js";
import Student from "./models/student.js";

import {
  BASE_YEAR,
  BASE_STUDENT_COUNT,
  COUNTRIES,
  STATES,
  COURSES,
  SKILLS,
} from "./constants.js";

import faker from "faker";

const seedCollegeDocuments = async () => {
  let collegeDocuments = [];

  COUNTRIES.forEach((country) => {
    for (let i = 0; i < 50; i++) {
      const name = `${country} College ${i + 1}`;
      const yearFounded = Math.floor(BASE_YEAR + Math.random() * 421);
      const city = `${country} City ${Math.floor(Math.random() * 50)}`;

      const state =
        STATES[country][Math.floor(Math.random() * STATES[country].length)];

      const studentCount = Math.floor(
        BASE_STUDENT_COUNT + Math.random() * 2000
      );
      const courses = [...COURSES]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(3 + Math.random() * 7));

      collegeDocuments.push({
        name,
        yearFounded,
        city,
        state,
        country,
        studentCount,
        courses,
      });
    }
  });

  try {
    const colleges = await College.insertMany(collegeDocuments);
    return colleges;
  } catch (error) {
    console.log(error);
  }
};

const seedStudentDocuments = async (colleges) => {
  let studentDocuments = [];

  colleges.forEach((college) => {
    for (let i = 0; i < 100; i++) {
      const name = faker.name.findName();
      const batchYear =
        college.yearFounded +
        Math.floor(Math.random() * (2021 - college.yearFounded));
      const collegeId = college._id;
      const skills = [...SKILLS]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(3 + Math.random() * 10));

      studentDocuments.push({
        name,
        batchYear,
        collegeId,
        skills,
      });
    }
  });

  try {
    await Student.insertMany(studentDocuments);
  } catch (error) {
    console.log(error);
  }
};

export const runSeeder = async () => {
  // await Student.deleteMany({});
  // await College.deleteMany({});

  const colleges = await seedCollegeDocuments();
  await seedStudentDocuments(colleges);
};
