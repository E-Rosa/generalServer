"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentProfile = exports.getStudentByName = exports.getStudentById = void 0;
const db = require("../configurations/dbConnection.js");
const format = require("pg-format");
function getStudentByName(name) {
    let sql = format("SELECT * FROM %I WHERE student_name LIKE '%s%%';", "students", name);
    return db.client.query(sql);
}
exports.getStudentByName = getStudentByName;
function getStudentById(id) {
    return db.client.query("SELECT * FROM students INNER JOIN teachers ON teacher_id = student_teacher_id WHERE student_id = $1;", [id]);
}
exports.getStudentById = getStudentById;
function updateStudentProfile(name, status, id, city, level, frequency, description, birthday) {
    db.client.query("UPDATE students SET student_name=$2, student_status=$3, student_city=$4, student_level=$5, student_frequency=$6, student_description=$7, student_birthday=$8 WHERE student_id = $1", [id, name, status, city, level, frequency, description, birthday]);
}
exports.updateStudentProfile = updateStudentProfile;
//tsc --module commonjs ./api/repository/studentRepo.ts
