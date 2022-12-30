"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSession = void 0;
function saveSession(id) {
    window.sessionStorage.removeItem("student_id");
    window.sessionStorage.setItem("student_id", id);
}
exports.saveSession = saveSession;
