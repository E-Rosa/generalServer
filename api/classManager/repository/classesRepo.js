"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClassesByStudentId = exports.deleteClassById = exports.insertClass = exports.updateClass = exports.getAllClassesById = void 0;
const db = require("../configurations/dbConnection.js");
const teacherRepo_1 = require("./teacherRepo");
const studentRepo_1 = require("./studentRepo");
function getAllClassesById(studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.client.query("SELECT class_id, class_title, class_description, class_date, class_duration, class_status, class_grade, student_name, teacher_name, class_time, class_payment_id FROM classes INNER JOIN students ON class_student_id = student_id INNER JOIN teachers ON class_teacher_id = teacher_id WHERE student_id = $1;", [studentId]);
    });
}
exports.getAllClassesById = getAllClassesById;
function updateClass(ClassModel) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.client.query("UPDATE classes SET class_title=$1, class_description=$2, class_date=$3, class_duration=$4, class_status=$5, class_grade=$6, class_time=$7 WHERE class_id=$8", [
            ClassModel.title,
            ClassModel.description,
            ClassModel.date,
            ClassModel.duration,
            ClassModel.status,
            ClassModel.grade,
            ClassModel.time,
            ClassModel.id,
        ]);
    });
}
exports.updateClass = updateClass;
function insertClass(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let teacherId = yield (0, teacherRepo_1.getTeacherIdByName)(data.teacher_name);
        let studentId = yield (0, studentRepo_1.getStudentIdByName)(data.student_name);
        return yield db.client.query("INSERT INTO classes(class_id, class_teacher_id, class_student_id, class_title, class_description, class_date, class_duration, class_status, class_grade, class_time, class_payment_id) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [
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
        ]);
    });
}
exports.insertClass = insertClass;
function deleteClassById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.client.query("DELETE FROM classes WHERE class_id=$1", [id]);
    });
}
exports.deleteClassById = deleteClassById;
function deleteClassesByStudentId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.client.query("DELETE FROM classes WHERE class_student_id=$1", [id]);
    });
}
exports.deleteClassesByStudentId = deleteClassesByStudentId;
