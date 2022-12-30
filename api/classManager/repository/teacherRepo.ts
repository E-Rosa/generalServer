const db = require("../configurations/dbConnection.js");
import { QueryResult } from "pg";

async function getTeacherById(id: string): Promise<QueryResult> {
  return await db.client.query(
    "SELECT * FROM teachers WHERE teacher_id = $1;",
    [id]
  );
}

async function getTeacherNameById(teacher_id: string): Promise<string> {
  try {
    let data = await db.client.query(
      "SELECT (teacher_name) FROM teachers WHERE teacher_id=$1",
      [teacher_id]
    );
    return data.rows[0].teacher_name;
  } catch {
    console.log("couldnt get teacher name");
    return "not found";
  }
}

async function getTeacherIdByName(teacher_name: string): Promise<string> {
  let data = await db.client.query(
    "SELECT (teacher_id) FROM teachers WHERE teacher_name=$1",
    [teacher_name]
  );
  return data.rows[0].teacher_id
}

export { getTeacherById, getTeacherNameById, getTeacherIdByName };

//tsc --module commonjs ./api/repository/teacherRepo.ts
