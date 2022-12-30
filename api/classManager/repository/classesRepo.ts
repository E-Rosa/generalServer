import { DatabaseError, QueryResult } from "pg";
import { ClassModel } from "../models/classModel";
const db = require("../configurations/dbConnection.js");
import { getTeacherIdByName } from "./teacherRepo";
import { getStudentIdByName } from "./studentRepo";

async function getAllClassesById(studentId: string): Promise<QueryResult> {
  return await db.client.query(
    "SELECT class_id, class_title, class_description, class_date, class_duration, class_status, class_grade, student_name, teacher_name, class_time, class_payment_id FROM classes INNER JOIN students ON class_student_id = student_id INNER JOIN teachers ON class_teacher_id = teacher_id WHERE student_id = $1;",
    [studentId]
  );
}

async function updateClass(ClassModel: ClassModel): Promise<QueryResult> {
  return await db.client.query(
    "UPDATE classes SET class_title=$1, class_description=$2, class_date=$3, class_duration=$4, class_status=$5, class_grade=$6, class_time=$7 WHERE class_id=$8",
    [
      ClassModel.title,
      ClassModel.description,
      ClassModel.date,
      ClassModel.duration,
      ClassModel.status,
      ClassModel.grade,
      ClassModel.time,
      ClassModel.id,
    ]
  );
}

async function insertClass(data: ClassModel): Promise<QueryResult> {
    let teacherId: string = await getTeacherIdByName(data.teacher_name);
    let studentId: string = await getStudentIdByName(data.student_name);
    return await db.client.query(
      "INSERT INTO classes(class_id, class_teacher_id, class_student_id, class_title, class_description, class_date, class_duration, class_status, class_grade, class_time, class_payment_id) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [
        teacherId,
        studentId,
        data.title,
        data.description,
        data.date,
        data.duration,
        data.status,
        data.grade,
        data.time,
        data.payment_id
      ]
    );
}

async function deleteClassById(id: string): Promise<QueryResult> {
  return await db.client.query("DELETE FROM classes WHERE class_id=$1", [id]);
}

async function deleteClassesByStudentId(id: string) {
  return await db.client.query("DELETE FROM classes WHERE class_student_id=$1", [id]);
}

export {
  getAllClassesById,
  updateClass,
  insertClass,
  deleteClassById,
  deleteClassesByStudentId,
};
