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
exports.getTeacherIdByName = exports.getTeacherNameById = exports.getTeacherById = void 0;
const db = require("../configurations/dbConnection.js");
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.client.query("SELECT * FROM teachers WHERE teacher_id = $1;", [id]);
    });
}
exports.getTeacherById = getTeacherById;
function getTeacherNameById(teacher_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield db.client.query("SELECT (teacher_name) FROM teachers WHERE teacher_id=$1", [teacher_id]);
            return data.rows[0].teacher_name;
        }
        catch (_a) {
            console.log("couldnt get teacher name");
            return "not found";
        }
    });
}
exports.getTeacherNameById = getTeacherNameById;
function getTeacherIdByName(teacher_name) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield db.client.query("SELECT (teacher_id) FROM teachers WHERE teacher_name=$1", [teacher_name]);
        return data.rows[0].teacher_id;
    });
}
exports.getTeacherIdByName = getTeacherIdByName;
//tsc --module commonjs ./api/repository/teacherRepo.ts
