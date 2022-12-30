"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toStudent = exports.toIndex = exports.toAddStudent = exports.toAddPayment = exports.toAddClass = exports.toPayments = exports.toClasses = void 0;
function toClasses() {
    window.location.href = "http://localhost:5000/classManagement/p-classes/classes.html";
}
exports.toClasses = toClasses;
function toPayments() {
    window.location.href = "http://localhost:5000/classManagement/p-payments/payments.html";
}
exports.toPayments = toPayments;
function toAddClass() {
    window.location.href = "http://localhost:5000/classManagement/p-addClass/addClass.html";
}
exports.toAddClass = toAddClass;
function toAddPayment() {
    window.location.href = "http://localhost:5000/classManagement/p-addPayment/addPayment.html";
}
exports.toAddPayment = toAddPayment;
function toAddStudent() {
    window.location.href = "http://localhost:5000/classManagement/p-addStudent/addStudent.html";
}
exports.toAddStudent = toAddStudent;
function toIndex() {
    window.location.href = "http://localhost:5000/classManagement/index.html";
}
exports.toIndex = toIndex;
function toStudent() {
    window.location.href = `http://localhost:5000/classManagement/p-student/student.html`;
}
exports.toStudent = toStudent;
//tsc --module es6 ./public/modules/href.ts
