"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putStudentProfile = exports.getStudentById = exports.getStudent = void 0;
function getStudent(name) {
    return fetch(`http://localhost:5000/api/classManager/students/${name}`);
}
exports.getStudent = getStudent;
function getStudentById(id) {
    return fetch(`http://localhost:5000/api/classManager/students/profile/${id}`);
}
exports.getStudentById = getStudentById;
function putStudentProfile(id, data) {
    return fetch(`http://localhost:5000/api/classManager/students/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}
exports.putStudentProfile = putStudentProfile;
//tsc --module es6 ./public/modules/fetch.ts
