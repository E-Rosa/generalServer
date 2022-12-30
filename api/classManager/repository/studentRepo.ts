import { StudentProfileModel } from "../models/studentModel.js";
import { QueryResult, QueryResultBase, QueryResultRow, ResultBuilder } from "pg";
import { client } from "../configurations/dbConnection.js";
const format = require("pg-format");

async function getStudentByName(name: string): Promise<object> {
  let sql = format(
    "SELECT * FROM %I WHERE student_name ILIKE '%s%%';",
    "students",
    name
  );
  return await client.query(sql);
}

async function getStudentById(id: string): Promise<QueryResult>{
  return await client.query(
    "SELECT * FROM students INNER JOIN teachers ON teacher_id = student_teacher_id WHERE student_id = $1;",
    [id]
  );
}

async function updateStudent(
  StudentProfileModel: StudentProfileModel
): Promise<QueryResult> {
  return await client.query(
    "UPDATE students SET student_name=$2, student_status=$3, student_city=$4, student_level=$5, student_frequency=$6, student_description=$7, student_birthday=$8, student_subscription_date=$9 WHERE student_id = $1",
    [
      StudentProfileModel.id,
      StudentProfileModel.name,
      StudentProfileModel.status,
      StudentProfileModel.city,
      StudentProfileModel.level,
      StudentProfileModel.frequency,
      StudentProfileModel.description,
      StudentProfileModel.birthday,
      StudentProfileModel.subscription,
    ]
  );
}

async function deleteStudentById(id: string): Promise<QueryResult> {
  return await client.query("DELETE FROM students WHERE student_id=$1", [
    id,
  ]);
}

async function insertStudent(
  name: string,
  status: string,
  description: string,
  city: string,
  frequency: string,
  level: string,
  subscription: string
): Promise<QueryResult> {
  return await client.query(
    "INSERT INTO students(student_id, student_name, student_status, student_description, student_city, student_frequency, student_level, student_subscription_date, student_teacher_id) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, '012b98fa-f34d-4d21-9c35-153f2ac57cd1')",
    [name, status, description, city, frequency, level, subscription]
  );
}

async function getStudentCreditsByStudentName(name: string): Promise<number>{
  const queryResult = await client.query("SELECT (student_class_credits) FROM students WHERE student_name=$1",
  [name]
  )
  if(queryResult.rows){
    if(queryResult.rows[0] != undefined){
      if(queryResult.rows[0].student_class_credits != null){
        return queryResult.rows[0].student_class_credits
      }else{
        return 0
      }
    }
    else{
      return 0
    }
  }
  else{
    return 0
  }
}
async function getStudentNameById(student_id: string): Promise<string> {
  let data = await client.query(
    "SELECT (student_name) FROM students WHERE student_id=$1",
    [student_id]
  );
  return data.rows[0].student_name;
}

async function getStudentIdByName(student_name: string): Promise<string> {
  try {
    let data = await client.query(
      "SELECT (student_id) FROM students WHERE student_name=$1",
      [student_name]
    );
    return data.rows[0].student_id;
  } catch {
    console.log("couldnt get student name");
    return "not found";
  }
}
export {
  getStudentById,
  getStudentByName,
  updateStudent,
  deleteStudentById,
  insertStudent,
  getStudentCreditsByStudentName,
  getStudentNameById, getStudentIdByName
};

//tsc --module commonjs ./api/repository/studentRepo.ts
