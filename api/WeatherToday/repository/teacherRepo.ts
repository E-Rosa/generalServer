const db = require("../configurations/dbConnection.js");

function getTeacherById(id: string): Promise<object> {
  return db.client.query("SELECT * FROM teachers WHERE teacher_id = $1;", [id]);
}

export { getTeacherById };

//tsc --module commonjs ./api/repository/teacherRepo.ts
