const db = require("../configurations/dbConnection.js");
const format = require("pg-format");

function getStudentByName(name: string): Promise<object> {
  let sql = format(
    "SELECT * FROM %I WHERE student_name LIKE '%s%%';",
    "students",
    name
  );
  return db.client.query(sql);
}

function getStudentById(id: string): Promise<object> {
  return db.client.query(
    "SELECT * FROM students INNER JOIN teachers ON teacher_id = student_teacher_id WHERE student_id = $1;",
    [id]
  );
}

function updateStudentProfile(
  name: string,
  status: string,
  id: string,
  city: string,
  level: string,
  frequency: string,
  description: string,
  birthday: string
): void {
  db.client.query(
    "UPDATE students SET student_name=$2, student_status=$3, student_city=$4, student_level=$5, student_frequency=$6, student_description=$7, student_birthday=$8 WHERE student_id = $1",
    [id, name, status, city, level, frequency, description, birthday]
  );
}

export { getStudentById, getStudentByName, updateStudentProfile };

//tsc --module commonjs ./api/repository/studentRepo.ts
