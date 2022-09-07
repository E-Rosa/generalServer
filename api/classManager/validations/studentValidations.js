"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStudentProfileAlterable = void 0;
const { getTeacherById } = require("../repository/teacherRepo.js");
const { getStudentById } = require("../repository/teacherRepo.js");
function validateStudentProfileAlterable(profile) {
    if (getTeacherById(profile.teacher_id).then((data) => {
        if (data.rows) {
            if (data.rows.lenght > 0) {
                if (data.rows[0].teacher_id == profile.teacher_id) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    })) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateStudentProfileAlterable = validateStudentProfileAlterable;
//tsc --module commonjs ./api/validations/studentValidations.ts
