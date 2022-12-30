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
exports.getStudentIdByName = exports.getStudentNameById = exports.getStudentCreditsByStudentName = exports.insertStudent = exports.deleteStudentById = exports.updateStudent = exports.getStudentByName = exports.getStudentById = void 0;
const dbConnection_js_1 = require("../configurations/dbConnection.js");
const format = require("pg-format");
function getStudentByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = format("SELECT * FROM %I WHERE student_name ILIKE '%s%%';", "students", name);
        return yield dbConnection_js_1.client.query(sql);
    });
}
exports.getStudentByName = getStudentByName;
function getStudentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield dbConnection_js_1.client.query("SELECT * FROM students INNER JOIN teachers ON teacher_id = student_teacher_id WHERE student_id = $1;", [id]);
    });
}
exports.getStudentById = getStudentById;
function updateStudent(StudentProfileModel) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield dbConnection_js_1.client.query("UPDATE students SET student_name=$2, student_status=$3, student_city=$4, student_level=$5, student_frequency=$6, student_description=$7, student_birthday=$8, student_subscription_date=$9 WHERE student_id = $1", [
            StudentProfileModel.id,
            StudentProfileModel.name,
            StudentProfileModel.status,
            StudentProfileModel.city,
            StudentProfileModel.level,
            StudentProfileModel.frequency,
            StudentProfileModel.description,
            StudentProfileModel.birthday,
            StudentProfileModel.subscription,
        ]);
    });
}
exports.updateStudent = updateStudent;
function deleteStudentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield dbConnection_js_1.client.query("DELETE FROM students WHERE student_id=$1", [
            id,
        ]);
    });
}
exports.deleteStudentById = deleteStudentById;
function insertStudent(name, status, description, city, frequency, level, subscription) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield dbConnection_js_1.client.query("INSERT INTO students(student_id, student_name, student_status, student_description, student_city, student_frequency, student_level, student_subscription_date, student_teacher_id) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, '012b98fa-f34d-4d21-9c35-153f2ac57cd1')", [name, status, description, city, frequency, level, subscription]);
    });
}
exports.insertStudent = insertStudent;
function getStudentCreditsByStudentName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryResult = yield dbConnection_js_1.client.query("SELECT (student_class_credits) FROM students WHERE student_name=$1", [name]);
        if (queryResult.rows) {
            if (queryResult.rows[0] != undefined) {
                if (queryResult.rows[0].student_class_credits != null) {
                    return queryResult.rows[0].student_class_credits;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    });
}
exports.getStudentCreditsByStudentName = getStudentCreditsByStudentName;
function getStudentNameById(student_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield dbConnection_js_1.client.query("SELECT (student_name) FROM students WHERE student_id=$1", [student_id]);
        return data.rows[0].student_name;
    });
}
exports.getStudentNameById = getStudentNameById;
function getStudentIdByName(student_name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield dbConnection_js_1.client.query("SELECT (student_id) FROM students WHERE student_name=$1", [student_name]);
            return data.rows[0].student_id;
        }
        catch (_a) {
            console.log("couldnt get student name");
            return "not found";
        }
    });
}
exports.getStudentIdByName = getStudentIdByName;
//tsc --module commonjs ./api/repository/studentRepo.ts
