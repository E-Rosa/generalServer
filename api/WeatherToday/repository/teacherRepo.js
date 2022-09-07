"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeacherById = void 0;
const db = require("../configurations/dbConnection.js");
function getTeacherById(id) {
    return db.client.query("SELECT * FROM teachers WHERE teacher_id = $1;", [id]);
}
exports.getTeacherById = getTeacherById;
//tsc --module commonjs ./api/repository/teacherRepo.ts
